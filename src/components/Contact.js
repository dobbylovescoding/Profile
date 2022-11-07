import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.cont}>
      <div className={styles.cont1}>
        <h2 className={styles.h2}>Get in touch!</h2>
        <p className={styles.p}>
          I am interested in starting a position as a junior front end developer
          but I am also open to any oppurtunity that will allow me to develop my
          programming skills further.
        </p>
        <form className={styles.form}>
          <input type="text" className={styles.name} placeholder="Name"></input>
          <input
            type="text"
            className={styles.email}
            placeholder="Email"
          ></input>
          <br />
          <input
            type="text"
            className={styles.subject}
            placeholder="Subject"
          ></input>
          <br />
          <textarea
            type="text"
            rows="10"
            cols="49"
            placeholder="Message"
            className={styles.message}
          ></textarea>
          <br />
          <input
            className={styles.submit}
            type="submit"
            value="Submit!"
          ></input>
        </form>
      </div>
      <div className={styles.cont2}></div>
    </div>
  );
}
