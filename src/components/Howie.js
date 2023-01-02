import styles from "./Howie.module.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import clickMe from "../images/clickMe.png";

export default function Howie() {
  return (
    <div className={styles.cont}>
      <div className={styles.cont1}>
        <img className={styles.clickMe} src={clickMe}></img>
      </div>
      <div className={styles.Howie}>
        <div className={styles.line1}>
          <span className={styles.kia}>H</span>
          <span className={styles.kia}>e</span>
          <span className={styles.kia}>l</span>
          <span className={styles.kia}>l</span>
          <span className={styles.kia}>o</span>
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
      </div>
    </div>
  );
}
