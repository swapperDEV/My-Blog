import React from "react";
import { ResponsiveImage } from "../UI/Image/Image";
import styles from "./blogpreview.module.scss";
import { FaCalendar, FaInfo } from "react-icons/fa";
export const BlogPreview = () => {
  return (
    <article className={styles.preview}>
      <div className={styles.image}>
        <ResponsiveImage src={"/assets/blog/previews/rocket.webp"} />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <p>
            <FaInfo /> Poradniki
          </p>
          <p>
            <FaCalendar /> 12 lipca 2022
          </p>
        </div>
        <p className={styles.title}>Jak przyspieszyć stronę internetową?</p>
        <p className={styles.description}>
          Co zrobić, aby strona internetowa ładowała się szybciej, a tym samym
          miała niższy współczynnik odrzuceń? Poznaj kilka sposobów, jak to
          osiągnąć.
        </p>
      </div>
    </article>
  );
};
