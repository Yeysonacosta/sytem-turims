import Image from "next/image";
import styles from "./historia.module.css";

export default function Historia() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <Image
          src="/fondocelendin.png"
          alt="Historia de CelendÃ­n"
          fill
          priority
          className={styles.heroImage}
        />

        <div className={styles.heroContent}>
          <h1>Historia de CelendÃ­n</h1>

          <p>
            Descubre los orÃ­genes de una de las provincias mÃ¡s importantes de
            Cajamarca, reconocida por su riqueza histÃ³rica, cultural y el
            espÃ­ritu trabajador de su gente.
          </p>
        </div>
      </section>

      {/* ================= INTRODUCCIÃ“N ================= */}

      <section className={styles.container}>

        <div className={styles.grid}>

          <div>

            <h2>Los orÃ­genes de CelendÃ­n</h2>

            <p>
              CelendÃ­n es una provincia ubicada en el departamento de
              Cajamarca, en la sierra norte del PerÃº. A lo largo de los aÃ±os se
              ha convertido en un importante centro comercial, agrÃ­cola,
              artesanal y turÃ­stico gracias a su privilegiada ubicaciÃ³n y a la
              riqueza cultural heredada de sus antiguos pobladores.
            </p>

            <p>
              Su nombre estÃ¡ ligado a diversas teorÃ­as histÃ³ricas. Algunos
              investigadores sostienen que proviene de antiguos pobladores
              llegados desde EspaÃ±a, mientras que otros indican que tiene
              relaciÃ³n con pueblos indÃ­genas que ocuparon la regiÃ³n mucho antes
              de la llegada de los espaÃ±oles.
            </p>

          </div>

          <div className={styles.imageBox}>

            <Image
              src="/images/historia/origenes-celendin.png"
              alt="CelendÃ­n antiguo"
              width={600}
              height={450}
            />

          </div>

        </div>

      </section>

      {/* ================= FUNDACIÃ“N ================= */}

      <section className={styles.sectionGray}>

        <div className={styles.container}>

          <div className={styles.gridReverse}>

            <div className={styles.imageBox}>

              <Image
                src="/images/historia/fundacion-celendin.png"
                alt="FundaciÃ³n de CelendÃ­n"
                width={600}
                height={450}
              />

            </div>

            <div>

              <h2>FundaciÃ³n de la ciudad</h2>

              <p>
                La ciudad de CelendÃ­n fue fundada oficialmente durante la Ã©poca
                colonial. Desde entonces se convirtiÃ³ en un importante punto de
                intercambio comercial entre la costa y la sierra, favoreciendo
                el crecimiento econÃ³mico de toda la regiÃ³n.
              </p>

              <p>
                Durante el Virreinato del PerÃº, CelendÃ­n destacÃ³ por el trabajo
                agrÃ­cola, la producciÃ³n ganadera y el desarrollo de la
                artesanÃ­a, actividades que continÃºan siendo parte fundamental
                de su economÃ­a.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= LÃNEA DE TIEMPO ================= */}

      <section className={styles.timelineSection}>

        <div className={styles.container}>

          <h2 className={styles.center}>
            LÃ­nea del Tiempo
          </h2>

          <div className={styles.timeline}>

            <div className={styles.card}>

              <span>Antes del siglo XVI</span>

              <h3>Pobladores Originarios</h3>

              <p>
                Diversos pueblos ocuparon estas tierras desarrollando la
                agricultura y el comercio entre comunidades vecinas.
              </p>

            </div>

            <div className={styles.card}>

              <span>Ã‰poca Colonial</span>

              <h3>FundaciÃ³n</h3>

              <p>
                CelendÃ­n comienza su crecimiento como villa colonial gracias a
                su ubicaciÃ³n estratÃ©gica y actividad econÃ³mica.
              </p>

            </div>

            <div className={styles.card}>

              <span>Siglo XIX</span>

              <h3>Desarrollo</h3>

              <p>
                La ciudad fortalece sus actividades comerciales, agrÃ­colas y
                ganaderas convirtiÃ©ndose en una de las mÃ¡s importantes de la
                regiÃ³n.
              </p>

            </div>

            <div className={styles.card}>

              <span>Actualidad</span>

              <h3>Destino TurÃ­stico</h3>

              <p>
                Hoy CelendÃ­n es reconocido por su patrimonio histÃ³rico,
                gastronomÃ­a, naturaleza, cultura y hospitalidad.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CULTURA ================= */}

      <section className={styles.container}>

        <h2 className={styles.center}>
          Cultura y Tradiciones
        </h2>

        <div className={styles.cards}>

          <div className={styles.infoCard}>

            <Image
              src="/historia3.jpg"
              alt="Sombreros"
              width={400}
              height={250}
            />

            <h3>Sombreros de Paja</h3>

            <p>
              CelendÃ­n es reconocido a nivel nacional por la elaboraciÃ³n
              artesanal de sombreros de paja, una tradiciÃ³n transmitida de
              generaciÃ³n en generaciÃ³n.
            </p>

          </div>

          <div className={styles.infoCard}>

            <Image
              src="/historia4.jpg"
              alt="Tradiciones"
              width={400}
              height={250}
            />

            <h3>Tradiciones</h3>

            <p>
              Sus festividades religiosas, ferias patronales y expresiones
              culturales reflejan la identidad y el orgullo del pueblo
              celendino.
            </p>

          </div>

          <div className={styles.infoCard}>

            <Image
              src="/historia5.jpg"
              alt="Arquitectura"
              width={400}
              height={250}
            />

            <h3>Arquitectura Colonial</h3>

            <p>
              Las casonas, iglesias y plazas conservan una arquitectura que
              recuerda el importante legado colonial de la ciudad.
            </p>

          </div>

        </div>

      </section>

      {/* ================= FRASE FINAL ================= */}

      <section className={styles.final}>

        <div className={styles.container}>

          <h2>
            CelendÃ­n: Historia, Cultura y TradiciÃ³n
          </h2>

          <p>
            Conocer la historia de CelendÃ­n es comprender el esfuerzo, la
            identidad y las costumbres de un pueblo que ha sabido conservar sus
            raÃ­ces mientras continÃºa desarrollÃ¡ndose como uno de los principales
            destinos turÃ­sticos de la regiÃ³n Cajamarca.
          </p>

        </div>

      </section>

    </>
  );
}