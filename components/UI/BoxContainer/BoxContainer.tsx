import React from "react";
import styles from "./boxcontainer.module.scss";
export const BoxContainer = ({ children }: { children: JSX.Element }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
