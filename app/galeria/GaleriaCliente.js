"use client";

import { useState } from "react";
import styles from "./galeria.module.css";

const imagenes = [
  {
    src: "/images/galeria/celendin-panoramica.jpg",
    titulo: "Paisaje de Celendín",
    categoria: "Naturaleza",
  },
  {
    src: "/images/galeria/plaza-armas-1.jpg",
    titulo: "Plaza de Armas",
    categoria: "Ciudad",
  },
  {
    src: "/images/galeria/catedral-celendin.jpg",
    titulo: "Catedral de Celendín",
    categoria: "Arquitectura",
  },
  {
    src: "/images/galeria/plaza-armas-2.jpg",
    titulo: "Jardines de la plaza",
    categoria: "Turismo",
  },
  {
    src: "/images/galeria/calle-celendin.jpg",
    titulo: "Calles de Celendín",
    categoria: "Historia",
  },
  {
    src: "/images/galeria/municipalidad-celendin.jpg",
    titulo: "Municipalidad de Celendín",
    categoria: "Arquitectura",
  },
  {
    src: "/images/galeria/plaza-armas-3.jpg",
    titulo: "Centro histórico",
    categoria: "Ciudad",
  },
  {
    src: "/images/galeria/celendin-antiguo.jpg",
    titulo: "Celendín antiguo",
    categoria: "Memoria histórica",
  },
];

export default function GaleriaCliente() {
  const [mostrarTodas, setMostrarTodas] = useState(false);
  const [seleccionada, setSeleccionada] = useState(null);

  const visibles = mostrarTodas ? imagenes : imagenes.slice(0, 6);

  const reemplazarImagen = (evento) => {
    evento.currentTarget.src = "/fondocelendin.png";
  };

  return (
    <main className={styles.pagina}>
      <section className={styles.cabecera}>
        <span>Galería fotográfica</span>
        <h1>Descubre la belleza de Celendín</h1>
        <p>
          Una colección de paisajes, plazas, calles y construcciones que
          forman parte de la identidad de la provincia.
        </p>
      </section>

      <section className={styles.galeria}>
        {visibles.map((imagen, indice) => (
          <button
            type="button"
            className={styles.tarjeta}
            key={imagen.src}
            onClick={() => setSeleccionada(imagen)}
            aria-label={`Abrir ${imagen.titulo}`}
          >
            <img
              src={imagen.src}
              alt={imagen.titulo}
              loading={indice < 3 ? "eager" : "lazy"}
              onError={reemplazarImagen}
            />

            <div className={styles.capa}>
              <span>{imagen.categoria}</span>
              <h2>{imagen.titulo}</h2>
              <strong>Ver fotografía ↗</strong>
            </div>
          </button>
        ))}
      </section>

      <div className={styles.acciones}>
        <button
          type="button"
          className={styles.verMas}
          onClick={() => setMostrarTodas((estado) => !estado)}
        >
          {mostrarTodas ? "Ver menos" : "Mostrar más imágenes"}
        </button>
      </div>

      {seleccionada && (
        <div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-label={seleccionada.titulo}
          onClick={() => setSeleccionada(null)}
        >
          <button
            type="button"
            className={styles.cerrar}
            onClick={() => setSeleccionada(null)}
            aria-label="Cerrar fotografía"
          >
            ×
          </button>

          <div
            className={styles.modalContenido}
            onClick={(evento) => evento.stopPropagation()}
          >
            <img
              src={seleccionada.src}
              alt={seleccionada.titulo}
              onError={reemplazarImagen}
            />

            <div className={styles.modalTexto}>
              <span>{seleccionada.categoria}</span>
              <h2>{seleccionada.titulo}</h2>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}