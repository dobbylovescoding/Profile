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
  return (
    <div className={styles.cont}>
      <div className={styles.cont1}>
        <h2 className={styles.h2}>Get in touch!</h2>
        <p className={styles.p}>
          I am interested in starting a position as a junior front end developer
          but I am also open to any oppurtunity that will allow me to develop my
          programming skills further.
        </p>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
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
          <button className={styles.submit} type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className={styles.cont2}></div>
    </div>
  );
}
