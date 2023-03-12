import { useRef } from "react";
import { Button } from "../UI/Button/Button";
import styles from "./contact.module.scss";
import { FaMailBulk } from "react-icons/fa";
import { send } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const name = useRef<HTMLInputElement>(null);
  const surname = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);
  const checkbox = useRef<HTMLInputElement>(null);
  const mailRegex =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const SERVICE_ID = "service_tzhswdp";
  const TEMPLATE_ID = "template_fydgv8b";
  const USER_ID = "user_wUXfMOXeh5mhtu3gbi9y1";
  const submitForm = () => {
    if (
      name.current!.value.length >= 1 &&
      surname.current!.value.length >= 1 &&
      email.current!.value.length >= 1 &&
      message.current!.value.length >= 1 &&
      email.current!.value.match(mailRegex)
    ) {
      const templateParams = {
        name: name.current!.value,
        surname: surname.current!.value,
        email: email.current!.value,
        message: message.current!.value,
        phone: "null",
        to_name: "wiktor",
        reply_to: "wiktormaciazek@gmail.com",
      };
      send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID).then(
        function (response) {
          toast.success("Email was sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
        function (error) {
          toast.error(`Error ${error}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
    } else {
      toast.error(`Fill all data`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
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
              <Button handleClick={submitForm}>
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
      <ToastContainer />
    </div>
  );
};
