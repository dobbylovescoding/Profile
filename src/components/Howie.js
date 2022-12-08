import styles from "./Howie.module.css";
import Contact from "../components/Contact";

export default function Howie() {
  return (
    <div className={styles.container}>
      <div className={styles.bgimg}>
        <section className={styles.Howie}>
          {/* <h1 className={styles.Conor}>
            <span className={styles.span}>C</span>
            <span className={styles.span}>o</span>
            <span className={styles.span}>n</span>
            <span className={styles.span}>o</span>
            <span className={styles.span}>r</span>
            <span className={styles.span1}>l</span>
            <span className={styles.span}>H</span>
            <span className={styles.span}>o</span>
            <span className={styles.span}>w</span>
            <span className={styles.span}>a</span>
            <span className={styles.span}>r</span>
            <span className={styles.span}>d</span>
          </h1> */}
          <div className={styles.line1}>
            <span className={styles.kia}>K</span>
            <span className={styles.kia}>i</span>
            <span className={styles.kia}>a</span>
            <span className={styles.kia1}>l</span>
            <span className={styles.kia}>O</span>
            <span className={styles.kia}>r</span>
            <span className={styles.kia}>a</span>
            <span className={styles.kia}>!</span>
          </div>
          <div className={styles.line2}>
            <span className={styles.name}>I</span>
            <span className={styles.name}>'</span>
            <span className={styles.name}>m</span>
            <span className={styles.name1}>l</span>
            <span className={styles.name}>C</span>
            <span className={styles.name}>o</span>
            <span className={styles.name}>n</span>
            <span className={styles.name}>o</span>
            <span className={styles.name}>r</span>
            <span className={styles.name1}>l</span>
            <span className={styles.name}>H</span>
            <span className={styles.name}>o</span>
            <span className={styles.name}>w</span>
            <span className={styles.name}>a</span>
            <span className={styles.name}>r</span>
            <span className={styles.name}>d</span>
            <span className={styles.name}>,</span>
          </div>
          <div className={styles.line3}>
            <span className={styles.web}>a</span>
            <span className={styles.web}>s</span>
            <span className={styles.web}>p</span>
            <span className={styles.web}>i</span>
            <span className={styles.web}>r</span>
            <span className={styles.web}>i</span>
            <span className={styles.web}>n</span>
            <span className={styles.web}>g</span>
            <span className={styles.web1}>l</span>
            <span className={styles.web}>w</span>
            <span className={styles.web}>e</span>
            <span className={styles.web}>b</span>
            <span className={styles.web1}>l</span>
            <span className={styles.web}>d</span>
            <span className={styles.web}>e</span>
            <span className={styles.web}>v</span>
            <span className={styles.web}>e</span>
            <span className={styles.web}>l</span>
            <span className={styles.web}>o</span>
            <span className={styles.web}>p</span>
            <span className={styles.web}>e</span>
            <span className={styles.web}>r</span>
          </div>
        </section>
        {/* <button className={styles.button}>Let's get in touch!</button> */}
      </div>
    </div>
  );
}
