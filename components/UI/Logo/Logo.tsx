import Image from "next/image";
import React from "react";
import styles from "./logo.module.scss";
export const Logo = ({ src }: { src: string }) => {
  return (
    <div className={styles.logo}>
      <Image src={src} width="32" height="32" alt="logo" />
    </div>
  );
};
