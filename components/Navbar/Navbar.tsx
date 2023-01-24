import { Link } from "react-scroll";
import React, { useEffect, useState } from "react";
import { Button } from "../UI/Button/Button";
import styles from "./navbar.module.scss";

export const Navbar = () => {
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > 10) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <>
      <div className={!visible ? styles.line : styles.none}></div>
      <div className={`${styles.navbar} ${!visible && styles.diving}`}>
        <section>
          <div className={styles.author}>
            <a>Wiktor</a>
            <a> Maciążek</a>
          </div>
          <nav>
            <ul>
              <li>
                <Link smooth spy to="start" activeClass={styles.active}>
                  Start
                </Link>
              </li>
              <li>
                <Link smooth spy to="oferta" activeClass={styles.active}>
                  Oferta
                </Link>
              </li>
              <li>
                <Link smooth spy to="omnie" activeClass={styles.active}>
                  O mnie
                </Link>
              </li>
              <li>
                <Link smooth spy to="skills" activeClass={styles.active}>
                  Umiejętności
                </Link>
              </li>

              <li>
                <Link smooth spy to="projects" activeClass={styles.active}>
                  Projekty
                </Link>
              </li>
              <li>
                <Link smooth spy to="blog" activeClass={styles.active}>
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.button}>
            <Link smooth spy to="contact">
              Kontakt
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
