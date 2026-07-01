"use client";

import Link from "next/link";
import styles from "./carnavales.module.css";

const actividades = [
  {
    titulo: "Carnaval de la Hermandad",
    fecha: "Celendín 2025",
    descripcion:
      "Una celebración llena de música, coplas, disfraces y participación de los barrios de Celendín.",
    imagen:
      "https://img.youtube.com/vi/1-3YI1wEpaw/maxresdefault.jpg",
    video: "https://www.youtube.com/watch?v=1-3YI1wEpaw",
  },
  {
    titulo: "Carnaval del Recuerdo",
    fecha: "Celendín 2024",
    descripcion:
      "Una expresión musical que recuerda las costumbres, personajes y alegría del carnaval celendino.",
    imagen:
      "https://img.youtube.com/vi/oLqwna4ClHs/maxresdefault.jpg",
    video: "https://www.youtube.com/watch?v=oLqwna4ClHs",
  },
  {
    titulo: "Barrios y comparsas",
    fecha: "Tradición celendina",
    descripcion:
      "Los barrios preparan sus comparsas, vestuarios y presentaciones para compartir su identidad y creatividad.",
    imagen:
      "https://img.youtube.com/vi/5rW8XSAFIuM/maxresdefault.jpg",
    video: "https://www.youtube.com/watch?v=5rW8XSAFIuM",
  },
  {
    titulo: "Desfile de patotas",
    fecha: "Música y color",
    descripcion:
      "Grupos de amigos y vecinos recorren las calles con trajes, música, baile y coplas tradicionales.",
    imagen:
      "https://img.youtube.com/vi/q-_4SSFFV4o/maxresdefault.jpg",
    video: "https://www.youtube.com/watch?v=q-_4SSFFV4o",
  },
  {
    titulo: "Barrio Central",
    fecha: "Carnaval 2025",
    descripcion:
      "Una de las presentaciones que muestra la organización, el talento y la alegría de los barrios.",
    imagen:
      "https://img.youtube.com/vi/nA2GDZ65RXM/maxresdefault.jpg",
    video: "https://www.youtube.com/watch?v=nA2GDZ65RXM",
  },
  {
    titulo: "Barrio El Rosario",
    fecha: "Comparsas tradicionales",
    descripcion:
      "Sus participantes conservan la tradición mediante disfraces, coplas y presentaciones familiares.",
    imagen:
      "https://img.youtube.com/vi/twS7NIYH4sU/maxresdefault.jpg",
    video: "https://www.youtube.com/watch?v=twS7NIYH4sU",
  },
];

const tradiciones = [
  {
    icono: "🎭",
    titulo: "Comparsas",
    texto:
      "Delegaciones de barrios presentan vestuarios elaborados, personajes y coreografías.",
  },
  {
    icono: "🎶",
    titulo: "Coplas",
    texto:
      "Canciones alegres, picarescas y tradicionales acompañan las celebraciones.",
  },
  {
    icono: "🥁",
    titulo: "Patotas",
    texto:
      "Grupos de vecinos y amigos recorren las calles bailando y compartiendo alegría.",
  },
  {
    icono: "👑",
    titulo: "Reinas y personajes",
    texto:
      "Los barrios presentan representantes y personajes propios de la fiesta.",
  },
  {
    icono: "🧵",
    titulo: "Trajes artesanales",
    texto:
      "Muchos disfraces son elaborados durante semanas por los propios participantes.",
  },
  {
    icono: "🍲",
    titulo: "Comida tradicional",
    texto:
      "Las familias comparten platos típicos y bebidas tradicionales durante la fiesta.",
  },
];

export default function CarnavalesPage() {
  const fallback = "/fondocelendin.png";

  return (
    <main className={styles.pagina}>
      <section className={styles.hero}>
        <img
          src="https://img.youtube.com/vi/5rW8XSAFIuM/maxresdefault.jpg"
          alt="Carnavales de Celendín"
          className={styles.heroImagen}
          onError={(evento) => {
            evento.currentTarget.src = fallback;
          }}
        />

        <div className={styles.overlay} />

        <div className={styles.heroContenido}>
          <span className={styles.etiqueta}>Cultura y tradición</span>

          <h1>Carnavales de Celendín</h1>

          <p>
            Música, comparsas, coplas, disfraces y barrios unidos para
            celebrar una de las tradiciones más alegres de Celendín.
          </p>

          <a className={styles.boton} href="#actividades">
            Descubrir el carnaval
          </a>
        </div>
      </section>

      <section className={styles.introduccion}>
        <span className={styles.sobreTitulo}>Tradición celendina</span>

        <h2>Una fiesta construida por sus barrios</h2>

        <p>
          Familias, jóvenes, niños y adultos participan en la preparación
          de comparsas, canciones, disfraces y presentaciones que recorren
          las calles de la ciudad.
        </p>
      </section>

      <section id="actividades" className={styles.actividades}>
        <div className={styles.encabezado}>
          <span>Imágenes reales</span>
          <h2>Momentos del carnaval</h2>
        </div>

        <div className={styles.grid}>
          {actividades.map((actividad) => (
            <article className={styles.tarjeta} key={actividad.titulo}>
              <div className={styles.imagenContenedor}>
                <img
                  src={actividad.imagen}
                  alt={actividad.titulo}
                  loading="lazy"
                  onError={(evento) => {
                    evento.currentTarget.src = fallback;
                  }}
                />

                <span className={styles.fecha}>{actividad.fecha}</span>
              </div>

              <div className={styles.tarjetaContenido}>
                <h3>{actividad.titulo}</h3>
                <p>{actividad.descripcion}</p>

                <a
                  href={actividad.video}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.videoLink}
                >
                  Ver video real <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.tradiciones}>
        <div className={styles.encabezadoClaro}>
          <span>Identidad cultural</span>
          <h2>Lo que encontrarás en el carnaval</h2>
        </div>

        <div className={styles.tradicionesGrid}>
          {tradiciones.map((tradicion) => (
            <article className={styles.tradicion} key={tradicion.titulo}>
              <div className={styles.icono}>{tradicion.icono}</div>
              <h3>{tradicion.titulo}</h3>
              <p>{tradicion.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.llamada}>
        <div>
          <span>Más fotografías</span>
          <h2>Conoce Celendín mediante nuestra galería</h2>
        </div>

        <Link href="/galeria" className={styles.botonOscuro}>
          Abrir galería
        </Link>
      </section>
    </main>
  );
}