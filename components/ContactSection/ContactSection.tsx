import React from "react";
import { Button } from "../UI/Button/Button";
import styles from "./contactsection.module.scss";
import { FaPhone } from "react-icons/fa";

export const ContactSection = () => {
  return (
    <section className={styles.section}>
      <a>
        Chętnie odpowiem na twoje pytania <FaPhone />
      </a>
      <p>WRZUCIC TUTAJ FORMIK I UPPER FAQ.</p>
      <div>
        <button className={styles.btnWhite}>Skontaktuj się ze mną</button>
        <button className={styles.btnTr}>Poczytaj mojego bloga</button>
      </div>
    </section>
  );
};
