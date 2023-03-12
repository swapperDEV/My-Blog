import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import React from "react";
import styles from "./button.module.scss";
export const Button = ({
  children,
  link,
  scroll,
  scrollV,
  handleClick,
}: {
  children: JSX.Element;
  link?: string;
  scroll?: boolean;
  scrollV?: string;
  handleClick?: Function;
}) => {
  return (
    <>
      {!scroll ? (
        <>
          {link ? (
            <>
              {" "}
              <Link href={`${link}`} target="_blank">
                <button
                  onClick={() => {
                    handleClick && handleClick();
                  }}
                  className={styles.button}
                >
                  {children}
                </button>
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                handleClick && handleClick();
              }}
              className={styles.button}
            >
              {children}
            </button>
          )}
        </>
      ) : (
        <>
          <button
            onClick={() => {
              handleClick && handleClick();
            }}
            className={styles.button}
          >
            <LinkScroll smooth spy to={`${scrollV}`}>
              {children}
            </LinkScroll>
          </button>
        </>
      )}
    </>
  );
};
