import React from "react";
import { Button } from "../UI/Button/Button";
import styles from "./header.module.scss";
import { ResponsiveImage } from "../UI/Image/Image";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-scroll";
type HeaderProps = {
  titleFirst: JSX.Element;
  titleSecond: string;
  description: string;
  id: string;
  buttons: Array<{
    element: JSX.Element;
    link?: string;
    scroll?: boolean;
    scrollV?: string;
  }>;
};

export const Header = ({
  titleFirst,
  titleSecond,
  id,
  description,
  buttons,
}: HeaderProps) => {
  return (
    <>
      {" "}
      <section className={styles.header} id={id}>
        <div className={styles.content}>
          <header>
            <p className={styles.title}>
              {titleFirst}
              <a>.</a> {titleSecond}.
            </p>
            <p className={styles.description}>{description}</p>
            <div className={styles.buttons}>
              {buttons.map((btn, index) => {
                return (
                  <Button
                    key={index}
                    link={btn.link}
                    scroll={btn.scroll}
                    scrollV={btn.scrollV}
                  >
                    {btn.element}
                  </Button>
                );
              })}
            </div>
          </header>
          <div className={styles.img}>
            <ResponsiveImage src={"/assets/flat.png"} />
          </div>
        </div>
        <div className={styles.angle}>
          <Link smooth spy to="oferta">
            <FaAngleDown />
          </Link>
        </div>
      </section>
    </>
  );
};
