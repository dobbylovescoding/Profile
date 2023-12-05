import styles from "./SkillSet.module.css";
import logo512 from "../images/logo512.png";
import tripleLogo from "../images/tripleLogo.png";

export default function SkillSet() {
  return (
    <div className={styles.cont}>
      <div className={styles.cont1}>
        <h2 className={styles.h2}>My Skills!</h2>
        <p className={styles.p}>
          I have been learning to code since early 2022 through various online
          tools along with gaining my previously mentioned qualification from
          Mission Ready HQ in Auckland, New Zealand. More recently I have taken
          an interest in animations and that is an area I am now starting to
          focus on along with continuously developing my knowledge of ReactJS,
          NodeJS, JavaScript (ES6), HTML5, CSS and MySQL. This website being a
          way of demonstrating my skills in the above-mentioned areas.
        </p>
        <p className={styles.p1}>
          I have great written and verbal communication skills along with the
          ability to work efficiently as part of a team. With my previous 10
          years’ military experience I was required to work in various aspects
          of logistics in different areas of New Zealand and the world. This
          included the leading of teams in overseas and domestic environments
          while deployed with the Air Force, collaboration with foreign
          militaries, and the equipment organisation for large scale exercises.
        </p>
      </div>
      <div className={styles.cont2}>
        <div className={styles.innerCont1}>
          <div className={styles.title1}>HTML5</div>
          <div className={styles.line1}></div>
          <div className={styles.title2}>CSS</div>
          <div className={styles.line2}></div>
          <div className={styles.title3}>ReactJS</div>
          <div className={styles.line3}></div>
          <div className={styles.title4}>JavaScript</div>
          <div className={styles.line4}></div>
        </div>
        <div className={styles.bottomCont}>
          <div className={styles.innerCont2}>
            <img className={styles.reactLogo} src={logo512} alt={logo512}></img>
          </div>
          <div className={styles.innerCont3}>
            <img className={styles.tripleLogo} src={tripleLogo} alt={tripleLogo}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
