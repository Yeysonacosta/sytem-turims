import styles from "./gastronomia.module.css";

const platos = [
  {
    nombre: "Caldo Verde",
    categoria: "Sopa tradicional",
    imagen: "/images/gastronomia/caldo-verde.jpg",
    descripcion:
      "Sopa tradicional de Cajamarca preparada con papa, quesillo, huevo y hierbas aromáticas. Es muy consumida durante los desayunos y las mañanas frías.",
  },
  {
    nombre: "Cuy Frito",
    categoria: "Cocina andina",
    imagen: "/images/gastronomia/cuy-frito.jpg",
    descripcion:
      "Plato representativo de la sierra peruana, servido con papas doradas, ensalada, mote y ají preparado de manera casera.",
  },
  {
    nombre: "Chicharrón con Mote",
    categoria: "Plato típico",
    imagen: "/images/gastronomia/chicharron-mote.jpg",
    descripcion:
      "Carne de cerdo dorada y crocante acompañada de mote, papa, cancha y salsa criolla. Es ideal para compartir en familia.",
  },
  {
    nombre: "Humitas",
    categoria: "Tradición del maíz",
    imagen: "/images/gastronomia/humitas.jpg",
    descripcion:
      "Preparadas con maíz molido y envueltas en pancas. Pueden ser dulces o saladas y suelen acompañarse con café o queso.",
  },
  {
    nombre: "Tamales",
    categoria: "Desayuno tradicional",
    imagen: "/images/gastronomia/tamales.jpg",
    descripcion:
      "Masa de maíz sazonada, rellena y cocida dentro de hojas. Es una preparación muy apreciada durante desayunos y celebraciones.",
  },
  {
    nombre: "Queso Cajamarquino",
    categoria: "Producto regional",
    imagen: "/images/gastronomia/queso-cajamarca.jpg",
    descripcion:
      "Producto elaborado con leche de la región. Destaca por su textura, sabor y presencia en numerosos platos y desayunos tradicionales.",
  },
  {
    nombre: "Mote con Queso",
    categoria: "Sabor campesino",
    imagen: "/images/gastronomia/mote.jpg",
    descripcion:
      "Una combinación sencilla y deliciosa de mote cocido con queso fresco o quesillo, tradicional en hogares y comunidades rurales.",
  },
  {
    nombre: "Manjar Blanco",
    categoria: "Dulce tradicional",
    imagen: "/images/gastronomia/manjar-blanco.jpg",
    descripcion:
      "Dulce preparado principalmente con leche y azúcar, cocido lentamente hasta obtener una consistencia cremosa y un sabor intenso.",
  },
  {
    nombre: "Rosquitas",
    categoria: "Panadería tradicional",
    imagen: "/images/gastronomia/rosquitas.jpg",
    descripcion:
      "Pequeñas rosquitas horneadas, crocantes y aromáticas. Son perfectas para acompañar una taza de café, chocolate o infusión.",
  },
];

const caracteristicas = [
  {
    icono: "🌽",
    titulo: "Ingredientes locales",
    texto:
      "Maíz, papa, mote, hierbas aromáticas, queso y productos cultivados en la región.",
  },
  {
    icono: "🧀",
    titulo: "Tradición quesera",
    texto:
      "Cajamarca es reconocida por sus quesos, quesillos y derivados elaborados con leche.",
  },
  {
    icono: "🍲",
    titulo: "Recetas familiares",
    texto:
      "Preparaciones transmitidas entre generaciones y presentes en fiestas y reuniones.",
  },
];

export const metadata = {
  title: "Gastronomía de Celendín",
  description:
    "Conoce los platos típicos, productos regionales y dulces tradicionales de Celendín y Cajamarca.",
};

export default function GastronomiaPage() {
  return (
    <main className={styles.pagina}>
      <section className={styles.hero}>
        <img
          src="/images/gastronomia/portada-gastronomia.jpg"
          alt="Gastronomía tradicional de Celendín y Cajamarca"
          className={styles.heroImagen}
        />

        <div className={styles.heroOverlay} />

        <div className={styles.heroContenido}>
          <span className={styles.etiqueta}>Sabores de nuestra tierra</span>

          <h1>
            Gastronomía de
            <strong> Celendín</strong>
          </h1>

          <p>
            Descubre una cocina llena de tradición, ingredientes naturales
            y recetas que forman parte de la identidad de Celendín y
            Cajamarca.
          </p>

          <a href="#platos" className={styles.boton}>
            Conocer los platos
          </a>
        </div>
      </section>

      <section className={styles.presentacion}>
        <span>Una cocina llena de tradición</span>

        <h2>Sabores que cuentan nuestra historia</h2>

        <p>
          La gastronomía de Celendín reúne productos de los campos andinos,
          técnicas familiares y preparaciones que se disfrutan durante todo
          el año.
        </p>

        <div className={styles.caracteristicas}>
          {caracteristicas.map((item) => (
            <article className={styles.caracteristica} key={item.titulo}>
              <div className={styles.icono}>{item.icono}</div>
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="platos" className={styles.seccionPlatos}>
        <div className={styles.encabezado}>
          <span>Platos y productos regionales</span>
          <h2>Gastronomía tradicional</h2>
          <p>
            Conoce algunas de las preparaciones y productos más apreciados
            en Celendín y la región Cajamarca.
          </p>
        </div>

        <div className={styles.grid}>
          {platos.map((plato) => (
            <article className={styles.tarjeta} key={plato.nombre}>
              <div className={styles.imagenContenedor}>
                <img
                  src={plato.imagen}
                  alt={plato.nombre}
                  loading="lazy"
                  className={styles.imagen}
                />

                <span className={styles.categoria}>
                  {plato.categoria}
                </span>
              </div>

              <div className={styles.contenido}>
                <h3>{plato.nombre}</h3>
                <p>{plato.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.invitacion}>
        <div>
          <span>Experiencia gastronómica</span>
          <h2>Disfruta los sabores de Celendín</h2>
          <p>
            Visita mercados, restaurantes y cocinas familiares para conocer
            las recetas y productos de nuestra provincia.
          </p>
        </div>

        <a href="/contactanos" className={styles.botonOscuro}>
          Contáctanos
        </a>
      </section>
    </main>
  );
}