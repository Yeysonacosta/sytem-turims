import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma.js";
import {
  COOKIE_REFRESH,
  COOKIE_SESION,
  DURACION_ACCESO_SEGUNDOS,
  DURACION_REFRESH_SEGUNDOS,
  firmarToken,
  generarRefreshToken,
  hashRefreshToken,
  verificarToken,
} from "../lib/token.js";

const MAX_INTENTOS = 5;
const VENTANA_MINUTOS = 15;

// Hash falso para que el tiempo de respuesta sea parecido exista o no el correo
// (evita descubrir qué correos están registrados).
const HASH_FALSO = bcrypt.hashSync("hash-falso", 12);

const opcionesCookie = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  path: "/",
};

function ponerCookies(res, tokenAcceso, tokenRefresh) {
  res.cookie(COOKIE_SESION, tokenAcceso, {
    ...opcionesCookie,
    maxAge: DURACION_ACCESO_SEGUNDOS * 1000,
  });
  res.cookie(COOKIE_REFRESH, tokenRefresh, {
    ...opcionesCookie,
    maxAge: DURACION_REFRESH_SEGUNDOS * 1000,
  });
}

function borrarCookies(res) {
  res.clearCookie(COOKIE_SESION, opcionesCookie);
  res.clearCookie(COOKIE_REFRESH, opcionesCookie);
}

function vencimientoRefresh() {
  return new Date(Date.now() + DURACION_REFRESH_SEGUNDOS * 1000);
}

export async function login(req, res) {
  const email = String(req.body?.email ?? "")
    .trim()
    .toLowerCase()
    .slice(0, 254);
  const password = String(req.body?.password ?? "").slice(0, 200);

  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Ingresa tu correo y tu contraseña." });
  }

  const ip = req.ip || "desconocida";
  const desde = new Date(Date.now() - VENTANA_MINUTOS * 60 * 1000);

  // Bloqueo temporal si hay demasiados fallos recientes por correo o por IP
  const fallos = await prisma.loginIntento.count({
    where: { createdAt: { gte: desde }, OR: [{ email }, { ip }] },
  });

  if (fallos >= MAX_INTENTOS) {
    return res.status(429).json({
      error: `Demasiados intentos. Vuelve a probar en ${VENTANA_MINUTOS} minutos.`,
    });
  }

  const admin = await prisma.admin.findUnique({ where: { email } });
  const coincide = await bcrypt.compare(
    password,
    admin ? admin.password : HASH_FALSO,
  );

  if (!admin || !coincide) {
    await prisma.loginIntento.create({ data: { email, ip } });
    return res.status(401).json({ error: "Correo o contraseña incorrectos." });
  }

  // Acceso correcto: limpia intentos fallidos y registros viejos
  await prisma.loginIntento.deleteMany({
    where: { OR: [{ email }, { ip }, { createdAt: { lt: desde } }] },
  });

  // Limpia sesiones vencidas y crea la sesión nueva
  await prisma.sesion.deleteMany({ where: { expiresAt: { lt: new Date() } } });

  const tokenRefresh = generarRefreshToken();
  const sesion = await prisma.sesion.create({
    data: {
      adminId: admin.id,
      tokenHash: hashRefreshToken(tokenRefresh),
      expiresAt: vencimientoRefresh(),
    },
  });

  const tokenAcceso = await firmarToken(admin.id, sesion.id);
  ponerCookies(res, tokenAcceso, tokenRefresh);

  return res.json({
    admin: { id: admin.id, nombre: admin.nombre, email: admin.email },
  });
}

// Entrega un access token nuevo y ROTA el refresh token (el anterior deja de servir).
export async function refresh(req, res) {
  const tokenRefresh = req.cookies?.[COOKIE_REFRESH];

  if (!tokenRefresh || typeof tokenRefresh !== "string") {
    borrarCookies(res);
    return res.status(401).json({ error: "Sesión expirada." });
  }

  const hashActual = hashRefreshToken(tokenRefresh);
  const sesion = await prisma.sesion.findUnique({
    where: { tokenHash: hashActual },
    select: {
      id: true,
      adminId: true,
      expiresAt: true,
      admin: { select: { id: true, nombre: true, email: true } },
    },
  });

  if (!sesion) {
    // Token desconocido (ya rotado, inventado o de una sesión cerrada).
    // NO se borran las cookies: si dos peticiones llegan casi juntas, la que
    // llega segunda traería un token ya rotado y borraría las cookies nuevas
    // que acaba de recibir la primera, dejando al admin fuera sin motivo.
    return res.status(401).json({ error: "Sesión expirada." });
  }

  if (sesion.expiresAt <= new Date()) {
    await prisma.sesion.deleteMany({ where: { id: sesion.id } });
    borrarCookies(res);
    return res.status(401).json({ error: "Sesión expirada." });
  }

  // Rotación atómica: solo gana quien todavía presente el token vigente.
  const nuevoRefresh = generarRefreshToken();
  const { count } = await prisma.sesion.updateMany({
    where: { id: sesion.id, tokenHash: hashActual },
    data: {
      tokenHash: hashRefreshToken(nuevoRefresh),
      expiresAt: vencimientoRefresh(),
    },
  });

  if (count !== 1) {
    // Otra petición simultánea ya renovó la sesión. No se borran las cookies
    // para no pisar las nuevas que esa otra petición está entregando.
    return res.status(401).json({ error: "Sesión expirada." });
  }

  const tokenAcceso = await firmarToken(sesion.adminId, sesion.id);
  ponerCookies(res, tokenAcceso, nuevoRefresh);

  return res.json({ admin: sesion.admin });
}

// Cierra la sesión de verdad: borra la fila, no solo las cookies.
export async function logout(req, res) {
  const tokenRefresh = req.cookies?.[COOKIE_REFRESH];
  const payload = await verificarToken(req.cookies?.[COOKIE_SESION]);
  const sesionId = Number(payload?.sid);

  const condiciones = [];
  if (tokenRefresh && typeof tokenRefresh === "string") {
    condiciones.push({ tokenHash: hashRefreshToken(tokenRefresh) });
  }
  if (Number.isInteger(sesionId)) {
    condiciones.push({ id: sesionId });
  }

  if (condiciones.length > 0) {
    await prisma.sesion.deleteMany({ where: { OR: condiciones } });
  }

  borrarCookies(res);
  return res.json({ ok: true });
}

export function me(req, res) {
  return res.json({ admin: req.admin });
}
