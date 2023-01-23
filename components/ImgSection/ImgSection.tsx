import React from "react";
import { Button } from "../UI/Button/Button";
import { ResponsiveImage } from "../UI/Image/Image";
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
        <ResponsiveImage src={img} />
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
