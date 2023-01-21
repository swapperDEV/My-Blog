import Image from "next/image";
import React from "react";
import { Button } from "../UI/Button/Button";
import styles from "./header.module.scss";
export const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.content}>
        <header>
          <p className={styles.title}>
            Cześć, jestem Wiktor. Projektuje strony internetowe
          </p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis doloribus fuga sapiente soluta praesentium. Aliquid!
          </p>
          <div className={styles.buttons}>
            <Button>
              <>Testxx</>
            </Button>
            <Button>
              <>Brakxx</>
            </Button>
          </div>
        </header>
        <picture>
          <Image src="/assets/hero.png" width="520" height="320" alt="hero" />
        </picture>
      </div>
    </section>
  );
};
