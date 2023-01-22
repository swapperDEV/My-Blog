import React from "react";
import styles from "./box.module.scss";
import { FaDesktop, FaAngleRight } from "react-icons/fa";

export const Box = () => {
  return (
    <div className={styles.box}>
      <div className={styles.top}>
        <div className={styles.icon}>
          <FaDesktop />
        </div>
        <p className={styles.title}>Kodowanie stron internetowych</p>
      </div>
      <div className={styles.bottom}>
        <p className={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut voluptas
          nobis consequuntur voluptatibus inventore? maiores, quidem, ex,!
        </p>
      </div>
      <p className={styles.more}>
        Dowiedz się więcej <FaAngleRight />
      </p>
    </div>
  );
};
