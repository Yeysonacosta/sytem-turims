import { prisma } from "../lib/prisma.js";
import { COOKIE_SESION, verificarToken } from "../lib/token.js";

// Protege cualquier ruta que solo deba usar el administrador.
// Además de validar el access token, comprueba que su sesión siga existiendo
// en la BD: si se hizo logout, el token deja de servir al instante.
export async function requireAdmin(req, res, next) {
  const payload = await verificarToken(req.cookies?.[COOKIE_SESION]);
  const adminId = Number(payload?.sub);
  const sesionId = Number(payload?.sid);

  if (!Number.isInteger(adminId) || !Number.isInteger(sesionId)) {
    return res.status(401).json({ error: "No autorizado." });
  }

  const sesion = await prisma.sesion.findUnique({
    where: { id: sesionId },
    select: {
      adminId: true,
      expiresAt: true,
      admin: { select: { id: true, nombre: true, email: true } },
    },
  });

  if (!sesion || sesion.adminId !== adminId || sesion.expiresAt <= new Date()) {
    return res.status(401).json({ error: "No autorizado." });
  }

  req.admin = sesion.admin;
  req.sesionId = sesionId;
  next();
}
