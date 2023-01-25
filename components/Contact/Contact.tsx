import React from "react";
import { Button } from "../UI/Button/Button";
import { ResponsiveImage } from "../UI/Image/Image";
import styles from "./contact.module.scss";
import { FaMailBulk } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className={styles.wrapper} id="contact">
      <section className={styles.contact}>
        <div className={styles.bottom}>
          <div className={styles.form}>
            <div className={styles.info}>
              <p className={styles.title}>Kontakt</p>
              <div className={styles.line}></div>
              <p className={styles.description}>
                Jeśli interesuje Cię współpraca nie bój się napisać na mojego
                maila: <a>wiktormaciazek@gmail.com</a> lub skorzystać z
                formularza kontaktowego. Zachęcam również do odwiedzenia
                githuba, bądź do szybszego kontaktu za pomocą discord.
              </p>
            </div>
            <div className={styles.input}>
              <label>Imie*</label>
              <input />
            </div>
            <div className={styles.input}>
              <label>Nazwisko*</label>
              <input />
            </div>
            <div className={styles.input}>
              <label>Email</label>
              <input type={"email"} />
            </div>
            <div className={styles.input}>
              <label>Treść wiadomości</label>
              <textarea />
            </div>
            <div className={styles.inputCheck}>
              <input type="checkbox" />
              <p>
                Wyrażam zgodę na przechowywanie przez tę witrynę przesłanych
                przeze mnie informacji, w celu związanym z odpowiedzią na moje
                zapytanie. Aby dowiedzieć się więcej, odwiedź politykę
                prywatności
              </p>
            </div>
            <div className={styles.buttons}>
              <Button link="/">
                {
                  <>
                    Wyślij wiadomość <FaMailBulk />
                  </>
                }
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
