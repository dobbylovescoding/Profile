import styles from "./About.module.css";
import ProfilePic from "../images/ProfilePhoto.png";

export default function About() {
  return (
    <div className={styles.cont}>
      <div className={styles.cont1}>
        <h2 className={styles.h2}>All about me</h2>
        <p className={styles.p}>
          I am a Full Stack developer currently loacted in Auckland, New
          Zealand. Although I have knowledge of both Front-end and Back-end my
          passion lies with using ReactJS to design and create websites. I have
          recently completed Mission Ready HQ's Full Stack developers programme
          and I am now moving on to their advanced programming course.
        </p>
        <p className={styles.p1}>
          My history before coding includes 10 years of service in the Royal New
          Zealand Air Force as a Logistics Specialist. This oppurtunity allowed
          me to do a lot of travel and gain a lot of useful life experience.
          Outisde of work I also spent a lot of my own time travelling around
          other areas of the world. Outside of travel my other hobbies include
          motorbikes, snowboarding, fitness and taking my dog on adventures.
        </p>
        <p className={styles.p2}>
          The advance programming course I am about to begin is only a few
          nights a week and always after 5pm. I am very interested to start my
          tech career now along with completing this course as it will allow me
          to be in the best position with the most knowledge available to me.
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
