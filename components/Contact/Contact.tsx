import React from "react";
import { Button } from "../UI/Button/Button";
import { ResponsiveImage } from "../UI/Image/Image";
import styles from "./contact.module.scss";
import { FaMailBulk } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.contact}>
        <div className={styles.info}>
          <p className={styles.title}>Kontakt</p>
          <div className={styles.line}></div>
          <p className={styles.lowertitle}>Porozmawiajmy o Twoich potrzebach</p>
          <p className={styles.description}>
            Jeśli interesuje Cię współpraca lub po prostu chcesz zadać pytanie,
            nie bój się napisać na mojego maila: <a>wiktormaciazek@gmail.com</a>{" "}
            lub skorzystać z formularza kontaktowego. Zachęcam do zapoznania się
            z<a> ofertą</a>, gdzie być może znajdziesz odpowiedź na swoje
            pytanie.
          </p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.form}>
            <div>
              <label></label>
              <input />
            </div>
            <div>
              <label></label>
              <input />
            </div>
            <div>
              <label></label>
              <input />
            </div>
            <div>
              <label></label>
              <textarea />
            </div>
            <div>
              <input type="checkbox" />
              <p>
                Wyrażam zgodę na przechowywanie przez tę witrynę przesłanych
                przeze mnie informacji, w celu związanym z odpowiedzią na moje
                zapytanie. Aby dowiedzieć się więcej, odwiedź politykę
                prywatności
              </p>
            </div>
            <div>
              <Button>
                {
                  <>
                    Wyślij wiadomość <FaMailBulk />
                  </>
                }
              </Button>
            </div>
          </div>
          <div className={styles.img}>
            <ResponsiveImage src={"/assets/contact.webp"} />
          </div>
        </div>
      </section>
    </div>
  );
};
