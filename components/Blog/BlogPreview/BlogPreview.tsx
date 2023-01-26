import React from "react";
import styles from "./blogpreview.module.scss";
import { FaCalendar, FaInfo } from "react-icons/fa";
import { ResponsiveImage } from "../../UI/Image/Image";
import { useRouter } from "next/router";
export const BlogPreview = ({
  title,
  description,
  creator,
  tags,
  src,
  slug,
  date,
}: {
  title: string;
  description: string;
  src: string;
  creator: string;
  tags: string[];
  slug: string;
  date: Date;
}) => {
  const router = useRouter();
  const readArticle = () => {
    router.push(`/blog/${slug}`);
  };
  return (
    <article className={styles.preview}>
      <div className={styles.image}>
        <ResponsiveImage src={src} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.info}>
          <p>
            <img src={"/assets/avatar.jpg"} width="32" /> {creator}
          </p>
          <p>
            <FaCalendar />{" "}
            <a>{`${date.getDate()}.${
              date.getMonth() + 1
            }.${date.getFullYear()}`}</a>
          </p>
        </div>
        <div>
          <p className={styles.readLink} onClick={readArticle}>
            Czytaj artykuł
          </p>
        </div>
      </div>
    </article>
  );
};
