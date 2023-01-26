import { useRef } from "react";
import { Button } from "../UI/Button/Button";
import { ResponsiveImage } from "../UI/Image/Image";
import styles from "./contact.module.scss";
import { FaMailBulk } from "react-icons/fa";

export const Contact = () => {
  const name = useRef<HTMLInputElement>(null);
  const surname = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);
  const checkbox = useRef<HTMLInputElement>(null);
  const submitForm = () => {};
  return (
    <div className={styles.wrapper} id="contact">
      <section className={styles.contact}>
        <div className={styles.bottom}>
          <div className={styles.form}>
            <div className={styles.info}>
              <p className={styles.title}>Kontakt</p>
              <div className={styles.line}></div>
              <p className={styles.description}>
                Jeśli masz do mnie jakiegolwiek pytanie napisz na maila:{" "}
                <a>wiktormaciazek@gmail.com</a> lub skorzystaj z formularza
                kontaktowego. Zachęcam również do odwiedzenia githuba, bądź do
                szybszego kontaktu za pomocą discord.
              </p>
            </div>
            <div className={styles.input}>
              <label>Imie*</label>
              <input ref={name} />
            </div>
            <div className={styles.input}>
              <label>Nazwisko*</label>
              <input ref={surname} />
            </div>
            <div className={styles.input}>
              <label>Email</label>
              <input ref={email} type={"email"} />
            </div>
            <div className={styles.input}>
              <label>Treść wiadomości</label>
              <textarea ref={message} />
            </div>
            <div className={styles.inputCheck}>
              <input ref={checkbox} type="checkbox" />
              <p>
                Wyrażam zgodę na przechowywanie przez tę witrynę przesłanych
                przeze mnie informacji, w celu związanym z odpowiedzią na moje
                zapytanie. Aby dowiedzieć się więcej, odwiedź politykę
                prywatności
              </p>
            </div>
            <div className={styles.buttons}>
              <Button link="/" handleClick={submitForm}>
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
