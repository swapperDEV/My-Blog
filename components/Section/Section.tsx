import React from "react";
import styles from "./section.module.scss";
type SectionProps = {
  title: string;
  lowertitle?: string;
  description?: JSX.Element;
  content?: Array<JSX.Element> | JSX.Element;
};

export const Section = ({
  title,
  lowertitle,
  description,
  content,
}: SectionProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionContent}>
        <div className={styles.text}>
          <div className={styles.title}>
            <p>{title}</p>
            <div className={styles.line}></div>
          </div>
          <p className={styles.lowertitle}>{lowertitle && lowertitle}</p>
          <p className={styles.description}>{description && description}</p>
        </div>
        {content && <div className={styles.content}>{content}</div>}
      </div>
    </section>
  );
};
