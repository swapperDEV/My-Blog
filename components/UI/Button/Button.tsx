import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import React from "react";
import styles from "./button.module.scss";
export const Button = ({
  children,
  link,
  scroll,
  scrollV,
}: {
  children: JSX.Element;
  link?: string;
  scroll?: boolean;
  scrollV?: string;
}) => {
  return (
    <>
      {!scroll ? (
        <>
          <Link href={`${link}`} target="_blank">
            <button className={styles.button}>{children}</button>
          </Link>
        </>
      ) : (
        <>
          <button className={styles.button}>
            <LinkScroll smooth spy to={`${scrollV}`}>
              {children}
            </LinkScroll>
          </button>
        </>
      )}
    </>
  );
};
