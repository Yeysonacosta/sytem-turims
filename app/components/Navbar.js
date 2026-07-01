"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Navbar.module.css";

const enlaces = [
  { nombre: "Inicio", href: "/" },
  { nombre: "Historia", href: "/historia" },
  { nombre: "Turismo", href: "/turismo" },
  { nombre: "Carnavales", href: "/carnavales" },
  { nombre: "Gastronomía", href: "/gastronomia" },
  { nombre: "Galería", href: "/galeria" },
  { nombre: "Contáctanos", href: "/contactanos" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [abierto, setAbierto] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link
          href="/"
          className={styles.logoLink}
          onClick={() => setAbierto(false)}
          aria-label="Ir al inicio"
        >
          <img
            src="/logo.png"
            alt="Logo Turismo Celendín"
            className={styles.logoImagen}
          />
        </Link>

        <button
          type="button"
          className={styles.botonMenu}
          onClick={() => setAbierto(!abierto)}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`${styles.enlaces} ${
            abierto ? styles.enlacesAbiertos : ""
          }`}
        >
          {enlaces.map((enlace) => (
            <Link
              key={enlace.href}
              href={enlace.href}
              onClick={() => setAbierto(false)}
              className={`${styles.enlace} ${
                pathname === enlace.href ? styles.activo : ""
              }`}
            >
              {enlace.nombre}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}