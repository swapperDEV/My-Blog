import Image from "next/image";
import React from "react";
import { Button } from "../UI/Button/Button";
import { ResponsiveImage } from "../UI/Image/Image";
import styles from "./project.module.scss";
export const Project = ({
  stack,
  badge,
  title,
  description,
  src,
  live,
  code,
}: {
  stack: JSX.Element;
  badge?: boolean;
  title: string;
  description: string;
  src: string;
  live: string;
  code: string;
}) => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.top}>
          <p className={styles.title}>{title}</p>
          <div className={styles.techStack}>{stack}</div>
          {badge && <div className={styles.badge}>Nowy</div>}
        </div>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
        <div className={styles.buttons}>
          <Button link={live}>{<>Odwiedź stronę</>}</Button>
          <Button link={code}>{<>Kod źródłowy</>}</Button>
        </div>
      </div>
      <div className={styles.imgPreview}>
        <img src={src} alt={"mockup"} />
      </div>
      <div className={styles.mobilebuttons}>
        <Button link={live}>{<>Odwiedź stronę</>}</Button>
        <Button link={code}>{<>Kod źródłowy</>}</Button>
      </div>
    </article>
  );
};
