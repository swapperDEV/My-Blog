import React from "react";
import { ResponsiveImage } from "../UI/Image/Image";
import styles from "./blogpreview.module.scss";
import { FaCalendar, FaInfo } from "react-icons/fa";
export const BlogPreview = ({
  title,
  description,
  creator,
  src,
  date,
}: {
  title: string;
  description: string;
  src: string;
  creator: string;
  date: string;
}) => {
  return (
    <article className={styles.preview}>
      <div className={styles.image}>
        <ResponsiveImage src={src} />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.info}>
          <p>
            <img src={"/assets/avatar.jpg"} width="32" /> {creator}
          </p>
          <p>
            <FaCalendar /> {date}
          </p>
        </div>
      </div>
    </article>
  );
};
