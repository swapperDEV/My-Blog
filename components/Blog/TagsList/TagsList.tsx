import React from "react";
import styles from "./tagslist.module.scss";
import Link from "next/link";
export const TagsList = ({ tags }: { tags: string[] }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tags}>
        {tags.map((tag, index) => {
          return (
            <Link key={tag} href={`/blog/tags/${tag}`}>
              <div key={index} className={styles.tag}>
                {tag}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
