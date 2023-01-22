import React, { useEffect, useState } from "react";
import { Button } from "../UI/Button/Button";
import styles from "./navbar.module.scss";

export const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
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
              <li>O mnie</li>
              <li>Projekty</li>
              <li>Skills</li>
              <li>Blog</li>
              <li>FAQ</li>
            </ul>
          </nav>
          <Button>
            <>Kontakt</>
          </Button>
        </section>
      </div>
    </>
  );
};
