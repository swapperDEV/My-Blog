import React from "react";
import styles from "./box.module.scss";
import { FaDesktop, FaAngleRight } from "react-icons/fa";

export const Box = ({
  title,
  icon,
  description,
}: {
  title: string;
  icon: JSX.Element;
  description: string;
}) => {
  return (
    <div className={styles.box}>
      <div className={styles.top}>
        <div className={styles.icon}>{icon}</div>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.bottom}>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.down}>
        <p className={styles.more}>
          Dowiedz się więcej <FaAngleRight />
        </p>
      </div>
    </div>
  );
};
