import React from "react";
import styles from "./footer.module.scss";
export const Footer = () => {
  return (
    <section className={styles.footerwrapper}>
      <footer className={styles.footer}>
        <div className={styles.tlt}>
          <p className={styles.title}>
            Wiktor <a>Maciążek</a>
          </p>
        </div>
        <div>Wiktor Maciążek © 2023 for wiktormaciazek.pl.</div>
      </footer>
    </section>
  );
};

// Images doodleipsum.com