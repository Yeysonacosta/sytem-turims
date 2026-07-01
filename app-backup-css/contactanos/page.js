import Image from "next/image";
import styles from "./contactanos.module.css";

export default function Contactanos() {
  return (
    <>

      {/*================ HERO =================*/}

      <section className={styles.hero}>

        <Image
          src="/contactanos-banner.jpg"
          alt="Contáctanos"
          fill
          priority
          className={styles.heroImage}
        />

        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>

          <h1>Contáctanos</h1>

          <p>
            ¿Tienes alguna consulta sobre los atractivos turísticos de Celendín?
            Nuestro equipo está listo para ayudarte y brindarte toda la
            información que necesites para que disfrutes de una experiencia
            inolvidable.
          </p>

        </div>

      </section>

      {/*================ INFORMACIÓN =================*/}

      <section className={styles.info}>

        <div className={styles.container}>

          <h2 className={styles.title}>
            Información de Contacto
          </h2>

          <p className={styles.subtitle}>
            Puedes comunicarte con nosotros mediante cualquiera de los
            siguientes medios.
          </p>

          <div className={styles.infoGrid}>

            <div className={styles.card}>

              <div className={styles.icon}>📍</div>

              <h3>Dirección</h3>

              <p>
                Plaza de Armas de Celendín
                <br />
                Cajamarca - Perú
              </p>

            </div>

            <div className={styles.card}>

              <div className={styles.icon}>📞</div>

              <h3>Teléfono</h3>

              <p>
                +51 999 999 999
              </p>

            </div>

            <div className={styles.card}>

              <div className={styles.icon}>📧</div>

              <h3>Correo Electrónico</h3>

              <p>
                turismo@celendin.pe
              </p>

            </div>

            <div className={styles.card}>

              <div className={styles.icon}>🕒</div>

              <h3>Horario</h3>

              <p>
                Lunes a Viernes
                <br />
                8:00 AM - 5:00 PM
              </p>

            </div>

          </div>

        </div>

      </section>

      {/*================ FORMULARIO =================*/}

      <section className={styles.formSection}>

        <div className={styles.container}>

          <div className={styles.formGrid}>

            <div className={styles.formText}>

              <h2>Envíanos un Mensaje</h2>

              <p>
                Completa el siguiente formulario para resolver tus dudas,
                solicitar información turística o enviarnos tus sugerencias.
                Nos comunicaremos contigo en el menor tiempo posible.
              </p>

            </div>

            <form className={styles.form}>

              <input
                type="text"
                placeholder="Nombre completo"
              />

              <input
                type="email"
                placeholder="Correo electrónico"
              />

              <input
                type="text"
                placeholder="Asunto"
              />

              <textarea
                rows="6"
                placeholder="Escribe tu mensaje..."
              ></textarea>

              <button
                type="submit"
                className={styles.button}
              >
                Enviar Mensaje
              </button>

            </form>

          </div>

        </div>

      </section>

      {/*================ MAPA =================*/}

      <section className={styles.mapSection}>

        <div className={styles.container}>

          <h2 className={styles.title}>
            Nuestra Ubicación
          </h2>

          <p className={styles.subtitle}>
            Nos encontramos en el corazón de la provincia de Celendín,
            un lugar lleno de historia, cultura y naturaleza.
          </p>

          <div className={styles.mapContainer}>

            <Image
              src="/mapa.jpg"
              alt="Mapa de Celendín"
              width={1200}
              height={600}
              className={styles.mapImage}
            />

          </div>

        </div>

      </section>

      {/*================ EQUIPO =================*/}

      <section className={styles.team}>

        <div className={styles.container}>

          <h2 className={styles.title}>
            Nuestro Equipo
          </h2>

          <p className={styles.subtitle}>
            Conoce a los estudiantes responsables del desarrollo de este proyecto.
          </p>

          <div className={styles.teamGrid}>

            <div className={styles.member}>

              <Image
                src="/equipo1.jpg"
                alt="Integrante 1"
                width={220}
                height={220}
              />

              <h3>Nombre del Integrante</h3>

              <span>Desarrollador Frontend</span>

              <p>
                Encargado del diseño visual, desarrollo de interfaces
                y experiencia de usuario.
              </p>

            </div>

            <div className={styles.member}>

              <Image
                src="/equipo2.jpg"
                alt="Integrante 2"
                width={220}
                height={220}
              />

              <h3>Nombre del Integrante</h3>

              <span>Desarrollador Backend</span>

              <p>
                Responsable de la estructura lógica,
                organización del proyecto y funcionamiento.
              </p>

            </div>

            <div className={styles.member}>

              <Image
                src="/equipo3.jpg"
                alt="Integrante 3"
                width={220}
                height={220}
              />

              <h3>Nombre del Integrante</h3>

              <span>Diseñador UI / UX</span>

              <p>
                Responsable de la identidad visual,
                colores, tipografía y diseño general.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/*================ REDES SOCIALES =================*/}

      <section className={styles.social}>

        <div className={styles.container}>

          <h2 className={styles.title}>
            Síguenos en Redes Sociales
          </h2>

          <p className={styles.subtitle}>
            Mantente informado sobre los atractivos turísticos de Celendín.
          </p>

          <div className={styles.socialGrid}>

            <div className={styles.socialCard}>
              <h3>📘 Facebook</h3>
              <p>Turismo Celendín</p>
            </div>

            <div className={styles.socialCard}>
              <h3>📷 Instagram</h3>
              <p>@turismocelendin</p>
            </div>

            <div className={styles.socialCard}>
              <h3>▶ YouTube</h3>
              <p>Celendín Turismo</p>
            </div>

            <div className={styles.socialCard}>
              <h3>💬 WhatsApp</h3>
              <p>+51 999 999 999</p>
            </div>

          </div>

        </div>

      </section>

      {/*================ CTA =================*/}

      <section className={styles.cta}>

        <div className={styles.container}>

          <h2>¡Te Esperamos en Celendín!</h2>

          <p>
            Vive una experiencia única recorriendo sus paisajes,
            disfrutando de su gastronomía y conociendo la riqueza
            cultural de una de las provincias más hermosas del Perú.
          </p>

          <button className={styles.button}>
            Explorar Celendín
          </button>

        </div>

      </section>

    </>
  );
}