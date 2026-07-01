import Image from "next/image";
import styles from "./gastronomia.module.css";

export default function Gastronomia() {
  return (
    <>

      {/*================ HERO =================*/}

      <section className={styles.hero}>

        <Image
          src="/gastronomia-banner.jpg"
          alt="Gastronomía de Celendín"
          fill
          priority
          className={styles.heroImage}
        />

        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>

          <h1>Gastronomía de Celendín</h1>

          <p>
            Descubre los sabores auténticos de Celendín, una tierra donde la
            tradición culinaria se mantiene viva gracias a sus recetas,
            ingredientes naturales y el talento de su gente.
          </p>

        </div>

      </section>

      {/*================ INTRODUCCIÓN =================*/}

      <section className={styles.intro}>

        <div className={styles.container}>

          <div className={styles.grid}>

            <div>

              <h2>Una cocina llena de tradición</h2>

              <p>
                La gastronomía de Celendín representa una mezcla de historia,
                cultura y tradición. Sus platos típicos son preparados con
                ingredientes frescos provenientes del campo, conservando los
                sabores que han pasado de generación en generación.
              </p>

              <p>
                Cada receta refleja la identidad del pueblo celendino y forma
                parte de las costumbres familiares, especialmente durante las
                festividades y reuniones tradicionales.
              </p>

            </div>

            <div className={styles.imageBox}>

              <Image
                src="/gastronomia1.jpg"
                alt="Comida típica"
                width={650}
                height={450}
              />

            </div>

          </div>

        </div>

      </section>

      {/*================ PLATOS =================*/}

      <section className={styles.platos}>

        <div className={styles.container}>

          <h2 className={styles.title}>
            Platos Típicos
          </h2>

          <div className={styles.cards}>

            {/* Tarjeta 1 */}

            <div className={styles.card}>

              <Image
                src="/gastronomia2.jpg"
                alt="Caldo Verde"
                width={500}
                height={350}
              />

              <div className={styles.info}>

                <h3>Caldo Verde</h3>

                <p>
                  Tradicional sopa preparada con papas, queso, hierbas
                  aromáticas y huevo, muy consumida durante los desayunos.
                </p>

              </div>

            </div>

            {/* Tarjeta 2 */}

            <div className={styles.card}>

              <Image
                src="/gastronomia3.jpg"
                alt="Cuy Frito"
                width={500}
                height={350}
              />

              <div className={styles.info}>

                <h3>Cuy Frito</h3>

                <p>
                  Uno de los platos más representativos de la sierra peruana,
                  acompañado de papas, ensalada y ají casero.
                </p>

              </div>

            </div>

            {/* Tarjeta 3 */}

            <div className={styles.card}>

              <Image
                src="/gastronomia4.jpg"
                alt="Chicharrón"
                width={500}
                height={350}
              />

              <div className={styles.info}>

                <h3>Chicharrón</h3>

                <p>
                  Delicioso plato preparado con carne de cerdo, servido con
                  mote, papas y salsa criolla.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/*================ BEBIDAS =================*/}

      <section className={styles.bebidas}>

        <div className={styles.container}>

          <div className={styles.gridReverse}>

            <div className={styles.imageBox}>

              <Image
                src="/gastronomia5.jpg"
                alt="Bebidas"
                width={650}
                height={450}
              />

            </div>

            <div>

              <h2>Bebidas Tradicionales</h2>

              <p>
                Celendín también destaca por sus bebidas típicas elaboradas con
                ingredientes naturales, ideales para acompañar cualquier comida
                tradicional.
              </p>

              <p>
                Entre las más conocidas se encuentran la chicha de jora, las
                infusiones de hierbas y bebidas preparadas con frutas propias
                de la región.
              </p>

            </div>

          </div>

        </div>

      </section>
            {/*================ PRODUCTOS LOCALES =================*/}

      <section className={styles.productos}>

        <div className={styles.container}>

          <h2 className={styles.title}>
            Productos Locales
          </h2>

          <div className={styles.cards}>

            <div className={styles.card}>

              <Image
                src="/gastronomia6.jpg"
                alt="Queso artesanal"
                width={500}
                height={350}
              />

              <div className={styles.info}>

                <h3>Queso Artesanal</h3>

                <p>
                  Elaborado con leche fresca de la región, el queso artesanal
                  de Celendín destaca por su sabor, textura y calidad, siendo
                  uno de los productos más apreciados por visitantes y
                  pobladores.
                </p>

              </div>

            </div>

            <div className={styles.card}>

              <Image
                src="/gastronomia7.jpg"
                alt="Miel"
                width={500}
                height={350}
              />

              <div className={styles.info}>

                <h3>Miel Natural</h3>

                <p>
                  La miel producida en Celendín es reconocida por su pureza,
                  aroma y propiedades nutritivas, gracias a la diversidad de
                  flores presentes en la zona.
                </p>

              </div>

            </div>

            <div className={styles.card}>

              <Image
                src="/gastronomia8.jpg"
                alt="Productos agrícolas"
                width={500}
                height={350}
              />

              <div className={styles.info}>

                <h3>Productos Agrícolas</h3>

                <p>
                  Papa, maíz, trigo, habas y otros cultivos forman parte de la
                  riqueza agrícola que abastece los hogares y mercados de la
                  provincia.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/*================ POSTRES =================*/}

      <section className={styles.postres}>

        <div className={styles.container}>

          <div className={styles.grid}>

            <div>

              <h2>Postres Tradicionales</h2>

              <p>
                Los dulces típicos de Celendín son preparados siguiendo recetas
                familiares que conservan el sabor de antaño.
              </p>

              <p>
                Entre ellos destacan los dulces de leche, manjar blanco,
                mermeladas artesanales y otros postres elaborados con productos
                naturales de la región.
              </p>

            </div>

            <div className={styles.imageBox}>

              <Image
                src="/gastronomia9.jpg"
                alt="Postres"
                width={650}
                height={450}
              />

            </div>

          </div>

        </div>

      </section>

      {/*================ GALERÍA =================*/}

      <section className={styles.gallery}>

        <div className={styles.container}>

          <h2 className={styles.title}>
            Galería Gastronómica
          </h2>

          <div className={styles.galleryGrid}>

            <Image
              src="/gastronomia10.jpg"
              alt="Plato típico"
              width={500}
              height={350}
            />

            <Image
              src="/gastronomia11.jpg"
              alt="Comida"
              width={500}
              height={350}
            />

            <Image
              src="/gastronomia12.jpg"
              alt="Tradición"
              width={500}
              height={350}
            />

            <Image
              src="/gastronomia13.jpg"
              alt="Restaurante"
              width={500}
              height={350}
            />

            <Image
              src="/gastronomia14.jpg"
              alt="Mercado"
              width={500}
              height={350}
            />

            <Image
              src="/gastronomia15.jpg"
              alt="Gastronomía"
              width={500}
              height={350}
            />

          </div>

        </div>

      </section>

      {/*================ ¿POR QUÉ PROBAR? =================*/}

      <section className={styles.why}>

        <div className={styles.container}>

          <h2 className={styles.title}>
            ¿Por qué disfrutar la gastronomía de Celendín?
          </h2>

          <div className={styles.whyGrid}>

            <div>

              <h3>🌿 Ingredientes Naturales</h3>

              <p>
                Los platos son preparados con productos frescos provenientes
                directamente del campo.
              </p>

            </div>

            <div>

              <h3>👨‍🍳 Tradición Familiar</h3>

              <p>
                Las recetas han sido transmitidas de generación en generación,
                conservando su sabor original.
              </p>

            </div>

            <div>

              <h3>🥘 Gran Variedad</h3>

              <p>
                Desde sopas y platos fuertes hasta postres y bebidas
                tradicionales, existe una amplia oferta gastronómica.
              </p>

            </div>

            <div>

              <h3>❤️ Identidad Cultural</h3>

              <p>
                Cada plato representa parte de la historia y las costumbres del
                pueblo celendino.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/*================ CTA =================*/}

      <section className={styles.cta}>

        <div className={styles.container}>

          <h2>¡Ven y disfruta los sabores de Celendín!</h2>

          <p>
            La gastronomía celendina es una experiencia que combina tradición,
            cultura y el auténtico sabor de la sierra cajamarquina.
          </p>

          <button className={styles.button}>
            Descubrir Más
          </button>

        </div>

      </section>

    </>
  );
}