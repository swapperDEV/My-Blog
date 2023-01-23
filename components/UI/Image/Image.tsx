import Image from "next/image";
import React from "react";
import styles from "./image.module.scss";
export const ResponsiveImage = ({
  src,
  anim,
}: {
  src: string;
  anim?: boolean;
}) => {
  return (
    <>
      <div className={anim ? styles.picAnim : styles.pic}>
        <Image
          alt={"picture"}
          layout="fill"
          className={styles.img}
          src={`${src}`}
        />
      </div>
    </>
  );
};
