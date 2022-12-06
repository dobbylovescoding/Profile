import styles from "./Howie.module.css";
import Contact from "../components/Contact";

export default function Howie() {
  return (
    <div className={styles.container}>
      <div className={styles.bgimg}>
        <section className={styles.Howie}>
          Kia Ora! <br /> Howie's the name,
          <br />
          Web Development's the game!
        </section>
        <button className={styles.button}>Let's get in touch!</button>
      </div>
    </div>
  );
}
