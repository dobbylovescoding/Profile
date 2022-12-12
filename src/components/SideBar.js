import styles from "./SideBar.module.css";
import { useState } from "react";
import smile from "../images/smile.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Howie from "../components/Howie";
import About from "../components/About";
import Coding from "../components/Coding";
import Work from "../components/Work";
import Contact from "../components/Contact";

export default function SideBar({ setDisplayedContent }) {
  const [whatButtonClicked, setWhatButtonClicked] = useState();

  function handleContentClick(event) {
    setWhatButtonClicked(event.currentTarget.id);
    console.log(event.target.id);
    switch (event.target.id) {
      case "Howie":
        setDisplayedContent(<Howie />);
        break;
      case "About":
        setDisplayedContent(<About />);
        break;
      case "Coding":
        setDisplayedContent(<Coding />);
        break;
      case "Work":
        setDisplayedContent(<Work />);
        break;
      case "Contact":
        setDisplayedContent(<Contact />);
      default:
        break;
    }
  }

  // function handleButtonToggle(e) {
  //   setWhatButtonClicked(e.currentTarget.id);
  //   console.log(e.currentTarget.id);
  // }

  return (
    <div className={styles.sideBar}>
      <div className={styles.topSection}>
        <img src={smile} alt="profile" className={styles.profileAvatar}></img>
        <div
          className={
            whatButtonClicked === "Howie" ? styles.howie_clicked : styles.howie
          }
          id="Howie"
          onClick={handleContentClick}
        >
          Conor
        </div>
        <div className={styles.fullStack}>Full Stack Developer</div>
      </div>
      <div>
        <div
          className={
            whatButtonClicked === "About"
              ? styles.navButtons_clicked
              : styles.navButtons
          }
          id="About"
          onClick={handleContentClick}
        >
          About
        </div>
        <div
          className={
            whatButtonClicked === "Coding"
              ? styles.navButtons_clicked
              : styles.navButtons
          }
          id="Coding"
          onClick={handleContentClick}
        >
          Skill Set
        </div>
        <div
          className={
            whatButtonClicked === "Work"
              ? styles.navButtons_clicked
              : styles.navButtons
          }
          id="Work"
          onClick={handleContentClick}
        >
          Work
        </div>
        <div
          className={
            whatButtonClicked === "Contact"
              ? styles.navButtons_clicked
              : styles.navButtons
          }
          id="Contact"
          onClick={handleContentClick}
        >
          Contact
        </div>
      </div>
      <div className={styles.icons}>
        <a
          href="https://www.linkedin.com/in/conor-howard-98528297/"
          className={styles.icon}
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://www.instagram.com/conor_howie/?hl=en"
          className={styles.icon}
        >
          <InstagramIcon />
        </a>
        <a href="https://github.com/dobbylovescoding" className={styles.icon}>
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
}
