import styles from "./turismo.module.css";

const lugares = [
  {
    nombre: "Plaza de Armas",
    zona: "Centro de Celendín",
    tipo: "Arquitectura y ciudad",
    distancia: "Centro de la ciudad",
    imagen: "/images/turismo/plaza-armas.jpg",
    descripcion:
      "El corazón de Celendín, rodeado de jardines, árboles, construcciones tradicionales y la iglesia principal. Es uno de los puntos de encuentro más importantes.",
  },
  {
    nombre: "Iglesia Virgen del Carmen",
    zona: "Plaza Mayor",
    tipo: "Patrimonio religioso",
    distancia: "Centro de la ciudad",
    imagen: "/images/turismo/iglesia-principal.jpg",
    descripcion:
      "Uno de los edificios más representativos de Celendín. Destaca por su arquitectura, su color característico y su importancia religiosa y cultural.",
  },
  {
    nombre: "Mirador San Isidro",
    zona: "Celendín",
    tipo: "Mirador natural",
    distancia: "Aproximadamente 1 km",
    imagen: "/images/turismo/mirador-san-isidro.jpg",
    descripcion:
      "Mirador ubicado en una colina al oeste de la ciudad. Desde este lugar se puede observar Celendín, sus calles y los paisajes que la rodean.",
  },
  {
    nombre: "Cerro Jelij",
    zona: "Celendín",
    tipo: "Montaña y paisaje",
    distancia: "Aproximadamente 10 km",
    imagen: "/images/turismo/cerro-jelij.jpg",
    descripcion:
      "Elevación natural desde donde se aprecia la ciudad de Celendín, los valles cercanos y parte del paisaje formado alrededor del río Marañón.",
  },
  {
    nombre: "Cascada La Novia",
    zona: "Distrito de Sucre",
    tipo: "Cascada natural",
    distancia: "Aproximadamente 5 km",
    imagen: "/images/turismo/cascada-la-novia.jpg",
    descripcion:
      "Cascada cuya caída de agua forma una figura semejante al vestido de una novia. Durante la temporada de lluvias aumenta su caudal y belleza.",
  },
  {
    nombre: "Caídas de Agua Langascocha",
    zona: "Provincia de Celendín",
    tipo: "Naturaleza y aventura",
    distancia: "Aproximadamente 8 km",
    imagen: "/images/turismo/langascocha.jpg",
    descripcion:
      "Caídas de agua del río Tingo que forman una pequeña poza natural de agua transparente y fría, ideal para disfrutar del paisaje y realizar caminatas.",
  },
  {
    nombre: "Municipalidad Provincial",
    zona: "Plaza Mayor",
    tipo: "Arquitectura urbana",
    distancia: "Centro de la ciudad",
    imagen: "/images/turismo/municipalidad.jpg",
    descripcion:
      "Edificio ubicado junto a la Plaza Mayor. Forma parte de la imagen urbana tradicional y del recorrido por el centro histórico de Celendín.",
  },
  {
    nombre: "Centro Histórico",
    zona: "Ciudad de Celendín",
    tipo: "Historia y cultura",
    distancia: "Recorrido a pie",
    imagen: "/images/turismo/centro-historico.jpg",
    descripcion:
      "Calles rectas, viviendas tradicionales, balcones y construcciones que permiten conocer la historia y el desarrollo urbano de Celendín.",
  },
  {
    nombre: "Biblioteca Municipal",
    zona: "Centro de Celendín",
    tipo: "Cultura y educación",
    distancia: "Centro de la ciudad",
    imagen: "/images/turismo/biblioteca.jpg",
    descripcion:
      "Espacio cultural dedicado a la lectura, la educación y la conservación de parte de la memoria documental de la provincia.",
  },
  {
    nombre: "Arquitectura Tradicional",
    zona: "Barrios de Celendín",
    tipo: "Identidad local",
    distancia: "Recorrido urbano",
    imagen: "/images/turismo/arquitectura-tradicional.jpg",
    descripcion:
      "Viviendas y construcciones que conservan detalles propios de la arquitectura tradicional de la sierra cajamarquina.",
  },
  {
    nombre: "Paisajes de Celendín",
    zona: "Alrededores de la ciudad",
    tipo: "Naturaleza",
    distancia: "Distintos recorridos",
    imagen: "/images/turismo/panorama-celendin.jpg",
    descripcion:
      "Montañas, campos, caminos rurales y valles forman parte de los escenarios naturales que rodean la ciudad de Celendín.",
  },
  {
    nombre: "Artesanía Celendina",
    zona: "Mercados y talleres",
    tipo: "Cultura artesanal",
    distancia: "Dentro de la ciudad",
    imagen: "/images/turismo/portada-turismo.jpg",
    descripcion:
      "Celendín es conocido por sus artesanos y por la elaboración de sombreros de paja toquilla, tejidos y otros productos tradicionales.",
  },
];

const experiencias = [
  {
    icono: "🥾",
    titulo: "Caminatas",
    texto:
      "Recorre miradores, calles históricas, caminos rurales y espacios naturales.",
  },
  {
    icono: "📷",
    titulo: "Fotografía",
    texto:
      "Captura paisajes, arquitectura, plazas y momentos de la vida celendina.",
  },
  {
    icono: "🧺",
    titulo: "Artesanía",
    texto:
      "Conoce el trabajo de los artesanos y los tradicionales sombreros celendinos.",
  },
  {
    icono: "🌿",
    titulo: "Naturaleza",
    texto:
      "Disfruta cascadas, montañas, valles y zonas ideales para descansar.",
  },
];

export const metadata = {
  title: "Turismo en Celendín",
  description:
    "Conoce los principales lugares turísticos, miradores, cascadas y atractivos culturales de Celendín.",
};

export default function TurismoPage() {
  return (
    <main className={styles.pagina}>
      <section className={styles.hero}>
        <img
          src="/images/turismo/portada-turismo.jpg"
          alt="Vista panorámica de Celendín"
          className={styles.heroImagen}
        />

        <div className={styles.heroCapa} />

        <div className={styles.heroContenido}>
          <span className={styles.etiqueta}>
            Cielo Azul del Edén
          </span>

          <h1>
            Descubre
            <strong> Celendín</strong>
          </h1>

          <p>
            Explora plazas, iglesias, miradores, cascadas, montañas,
            tradiciones y paisajes llenos de historia.
          </p>

          <a href="#lugares" className={styles.boton}>
            Ver lugares turísticos
          </a>
        </div>
      </section>

      <section className={styles.introduccion}>
        <span>Turismo, cultura y naturaleza</span>

        <h2>Una provincia llena de lugares por descubrir</h2>

        <p>
          Celendín ofrece recorridos por su centro histórico, paisajes
          naturales, cascadas, miradores y comunidades que mantienen vivas
          sus costumbres.
        </p>

        <div className={styles.experiencias}>
          {experiencias.map((experiencia) => (
            <article
              className={styles.experiencia}
              key={experiencia.titulo}
            >
              <div className={styles.icono}>
                {experiencia.icono}
              </div>

              <h3>{experiencia.titulo}</h3>
              <p>{experiencia.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="lugares" className={styles.seccionLugares}>
        <div className={styles.encabezado}>
          <span>Lugares reales de la provincia</span>
          <h2>Lugares turísticos destacados</h2>
          <p>
            Conoce atractivos urbanos, culturales y naturales de Celendín.
          </p>
        </div>

        <div className={styles.grid}>
          {lugares.map((lugar) => (
            <article className={styles.tarjeta} key={lugar.nombre}>
              <div className={styles.imagenContenedor}>
                <img
                  src={lugar.imagen}
                  alt={lugar.nombre}
                  loading="lazy"
                  className={styles.imagen}
                />

                <span className={styles.tipo}>
                  {lugar.tipo}
                </span>
              </div>

              <div className={styles.contenido}>
                <span className={styles.zona}>
                  {lugar.zona}
                </span>

                <h3>{lugar.nombre}</h3>

                <p>{lugar.descripcion}</p>

                <div className={styles.informacion}>
                  <span>📍 {lugar.distancia}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.recomendacion}>
        <div>
          <span>Prepara tu recorrido</span>
          <h2>Vive una experiencia inolvidable en Celendín</h2>
          <p>
            Lleva ropa cómoda, abrigo, agua, protector solar y respeta los
            espacios naturales y culturales durante tu visita.
          </p>
        </div>

        <a href="/galeria" className={styles.botonClaro}>
          Ver galería
        </a>
      </section>
    </main>
  );
}