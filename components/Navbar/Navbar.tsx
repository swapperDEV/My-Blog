import React from "react";
import { Button } from "../UI/Button/Button";
import styles from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
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
