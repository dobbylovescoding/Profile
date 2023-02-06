import { useRef } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p2genat",
        "template_51pbs1u",
        form.current,
        "9TDoLV3m4itARDMW3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  function switchVisible() {
    if (document.getElementById("Div1")) {
      if (document.getElementById("Div1").style.display == "none") {
        document.getElementById("Div1").style.display = "flex";
        document.getElementById("Div2").style.display = "none";
      } else {
        document.getElementById("Div1").style.display = "none";
        document.getElementById("Div2").style.display = "flex";
      }
    }
  }

  return (
    <div className={styles.cont}>
      <div id="Div1" className={styles.cont1}>
        <h2 className={styles.h2}>Get in touch!</h2>
        <p className={styles.p}>
          I am interested in starting a position as a junior front end developer
          but I am also open to any oppurtunity that will allow me to develop my
          programming skills further.
        </p>
        <form ref={form} onClick={sendEmail} className={styles.form}>
          <input
            className={styles.name}
            type="text"
            placeholder="Name"
            name="user_name"
            required
          />
          <input
            className={styles.email}
            type="email"
            placeholder="Email"
            name="user_email"
            required
          />
          <input
            className={styles.subject}
            type="text"
            placeholder="Subject"
            name="subject"
            required
          />
          <textarea
            className={styles.message}
            placeholder="Message"
            name="message"
            cols="30"
            rows="10"
          />
          <button
            className={styles.submit}
            type="button"
            value="Click"
            onClick={switchVisible}
          >
            Submit
          </button>
        </form>
      </div>
      <div id="Div2" className={styles.div2}>
        <h2 className={styles.h2}>Get in touch!</h2>
        <p className={styles.p}>
          I am interested in starting a position as a junior front end developer
          but I am also open to any oppurtunity that will allow me to develop my
          programming skills further.
        </p>

        <p className={styles.p1}>
          Message sent, thank you and have a great day!
        </p>
      </div>
      <div className={styles.cont2}></div>
    </div>
  );
}
