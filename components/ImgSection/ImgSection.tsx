import Image from "next/image";
import React from "react";
import { Button } from "../UI/Button/Button";
import styles from "./imgsection.module.scss";
type SectionProps = {
  title: string;
  lowertitle: string;
  description: JSX.Element;
  img: string;
  button: string;
};
export const ImgSection = ({
  title,
  lowertitle,
  description,
  img,
  button,
}: SectionProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionContent}>
        <div className={styles.pic}>
          <Image
            alt={"picture"}
            layout="fill"
            className={styles.img}
            src={`${img}`}
          />
        </div>
        <div className={styles.text}>
          <div className={styles.title}>
            <p>{title}</p>
          </div>
          <p className={styles.lowertitle}>{lowertitle}</p>
          <p className={styles.description}>{description}</p>
          <Button>
            <>{button}</>
          </Button>
        </div>
      </div>
    </section>
  );
};