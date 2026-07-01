import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>

      <div className={styles.logo}>

        <Image
          src="/logo.png"
          alt="Logo Celendín"
          width={70}
          height={70}
        />

      </div>

      <nav>

        <ul className={styles.menu}>

          <li>
            <Link href="/">Inicio</Link>
          </li>

          <li>
            <Link href="/historia">Historia</Link>
          </li>

          <li>
            <Link href="/turismo">Turismo</Link>
          </li>

          <li>
            <Link href="/gastronomia">Gastronomía</Link>
          </li>

          <li>
            <Link href="/contactanos">Contáctanos</Link>
          </li>

        </ul>

      </nav>

    </header>
  );
}