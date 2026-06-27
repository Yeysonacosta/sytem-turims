import Navbar from "./components/Navbar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>

      <Navbar />

      <main className={styles.main}>

        <div className={styles.hero}>

          <h1>Bienvenidos a Celendín</h1>

          <p>
            Descubre la riqueza cultural, gastronómica y turística de una de
            las provincias más hermosas de Cajamarca.
          </p>

          <button>Explorar</button>

        </div>

      </main>

    </>
  );
}