import React from "react";
import styles from "./section.module.scss";
import { Fade } from "react-awesome-reveal";
type SectionProps = {
  title: string;
  lowertitle?: string;
  description?: JSX.Element;
  content?: Array<JSX.Element> | JSX.Element;
  bgColor?: string;
  id?: string;
  align?: string;
};

export const Section = ({
  title,
  lowertitle,
  description,
  content,
  id,
  bgColor,
  align,
}: SectionProps) => {
  return (
    <section
      style={{ backgroundColor: bgColor }}
      id={id}
      className={styles.section}
    >
      <div className={styles.sectionContent}>
        <div className={align === "left" ? styles.textAlign : styles.text}>
          <div className={styles.title}>
            <p>{title}</p>
            <div className={styles.line}></div>
          </div>
          <p className={styles.lowertitle}>{lowertitle && lowertitle}</p>
          <p className={styles.description}>{description && description}</p>
        </div>
        {content && (
          <Fade>
            <div className={styles.content}>{content}</div>
          </Fade>
        )}
      </div>
    </section>
  );
};
