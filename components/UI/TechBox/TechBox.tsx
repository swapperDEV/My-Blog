import Image from "next/image";
import React from "react";
import styles from "./techbox.module.scss";
export const TechBox = ({
  bgColor,
  color,
  path,
  name,
}: {
  bgColor: string;
  color: string;
  path: string;
  name: string;
}) => {
  return (
    <div
      className={styles.box}
      style={{ color: color, backgroundColor: bgColor }}
    >
      <Image src={path} width="44" height="44" alt="lang" />
      <p>{name.toUpperCase()}</p>
    </div>
  );
};
