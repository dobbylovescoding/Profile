import styles from "./About.module.css";
import ProfilePic from "../images/ProfilePhoto.png";

export default function About() {
  return (
    <div className={styles.cont}>
      <div className={styles.cont1}>
        <h2 className={styles.h2}>All about me</h2>
        <p className={styles.p}>
          I am a Full Stack developer currently located in Auckland, New
          Zealand. Although I have knowledge of both Front-end and Back-end my
          passion lies with using ReactJS to design and create web applications.
          I have recently completed Mission Ready HQ's Full Stack developers
          programme (Certificate in Technology Product Development Foundations)
          and I am now continuing to pursue further study in my spare time.
        </p>
        <p className={styles.p1}>
          My history before web development includes 10 years of service in the
          Royal New Zealand Air Force as a Logistics Specialist. This
          opportunity allowed me to do a lot of travel and gain a lot of useful
          life experience along with testing my mental capacity to work under
          high-stress situations . Outside of my deployments and exercises with
          work I spent a lot of my own time travelling around other parts of the
          world. Other than traveling my interests include motorbikes,
          snowboarding, fitness and spending time with my dog and family.
        </p>
        <p className={styles.p2}>
          I am very interested to start my tech career now along with seeking
          out new ways to improve my coding ability. I have designed this
          profile so that you can have a chance to see my front-end ability. As
          I am new to this industry I would humbly accept any feedback or
          constructive criticism you may have that will aide me in furthering my
          ability.
        </p>
      </div>
      <div className={styles.cont2}>
        <div className={styles.imgCont}>
          <img className={styles.profilePic} src={ProfilePic}></img>
        </div>
      </div>
    </div>
  );
}
