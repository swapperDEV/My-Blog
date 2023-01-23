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
              <li>O mnie</li>
              <li>Skills</li>
              <li>Projekty</li>
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
