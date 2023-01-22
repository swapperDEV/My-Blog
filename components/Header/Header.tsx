import Image from "next/image";
import React from "react";
import { Button } from "../UI/Button/Button";
import styles from "./header.module.scss";
import { FaGithub, FaDiscord } from "react-icons/fa";
type HeaderProps = {
  titleFirst: string;
  titleSecond: string;
  description: string;
  buttons: Array<JSX.Element>;
};

export const Header = ({
  titleFirst,
  titleSecond,
  description,
  buttons,
}: HeaderProps) => {
  return (
    <section className={styles.header}>
      <div className={styles.content}>
        <header>
          <p className={styles.title}>
            {titleFirst}
            <a>.</a> {titleSecond}
            <a>.</a>
          </p>
          <p className={styles.description}>{description}</p>
          <div className={styles.buttons}>
            {buttons.map((btn: JSX.Element) => {
              return <Button key={btn.key}>{btn}</Button>;
            })}
          </div>
        </header>
        <picture>
          <Image src="/assets/hero.png" width="520" height="320" alt="hero" />
        </picture>
      </div>
    </section>
  );
};
