import { Link as PageLink } from "react-scroll";
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.scss";
import Hamburger from "hamburger-react";
import { useRouter } from "next/router";
import Link from "next/link";

export const Navbar = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(true);
  const [home, setHome] = useState(true);
  const [navDisplay, changeNavDisplay] = useState(false);
  const navToggle = () => {
    changeNavDisplay(!navDisplay);
  };
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > 10) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  useEffect(() => {
    if (router.pathname !== "/") {
      setHome(false);
    }
  }, []);
  const nav = [
    { name: "Start", link: "start" },
    { name: "Oferta", link: "oferta" },
    { name: "O mnie", link: "omnie" },
    { name: "Umiejętności", link: "skills" },
    { name: "Projekty", link: "projects" },
    { name: "Blog", link: "/blog", external: true },
  ];
  const navFlex = [{ name: "Home", link: "/" }];
  return (
    <>
      <div className={!visible ? styles.line : styles.none}></div>
      <div className={`${styles.navbar} ${!visible && styles.diving}`}>
        <section>
          <div className={styles.author}>
            <a>Wiktor</a>
            <a> Maciążek</a>
          </div>
          <nav>
            <ul>
              {home ? (
                <>
                  {nav.map((link) => {
                    return (
                      <li key={link.name}>
                        {link.external ? (
                          <>
                            <Link href={link.link}>{link.name}</Link>
                          </>
                        ) : (
                          <>
                            {" "}
                            <PageLink
                              smooth
                              spy
                              to={link.link}
                              activeClass={styles.active}
                            >
                              {link.name}
                            </PageLink>
                          </>
                        )}
                      </li>
                    );
                  })}
                </>
              ) : (
                <>
                  {navFlex.map((link) => {
                    return (
                      <li key={link.name}>
                        <Link href={link.link}>{link.name}</Link>
                      </li>
                    );
                  })}
                </>
              )}
            </ul>
          </nav>
          <div className={styles.button}>
            {home ?             
            <PageLink smooth spy to="contact">
              Kontakt
            </PageLink> 
            : <Link href={'./'}>
              Kontakt
            </Link>}
          </div>
          <div className={styles.burger}>
            <Hamburger
              distance="lg"
              size={28}
              toggled={navDisplay}
              toggle={navToggle}
            />
          </div>
          <div
            className={`${
              navDisplay ? styles.mobileNav : styles.mobileNavRight
            } ${!visible ? styles.mobileNavDown : styles.none}`}
          >
            <ul>
              {home ? (
                <>
                  {nav.map((link) => {
                    return (
                      <li key={link.name}>
                        {link.external ? (
                          <>
                            <Link href={link.link}>{link.name}</Link>
                          </>
                        ) : (
                          <>
                            <PageLink
                              smooth
                              spy
                              to={link.link}
                              activeClass={styles.active}
                            >
                              {link.name}
                            </PageLink>
                          </>
                        )}
                      </li>
                    );
                  })}
                </>
              ) : (
                <>
                  {navFlex.map((link) => {
                    return (
                      <li key={link.name}>
                        <Link href={link.link}>{link.name}</Link>
                      </li>
                    );
                  })}
                </>
              )}
            </ul>
            <div className={styles.buttonNav}>
              <PageLink smooth spy to="contact">
                Kontakt
              </PageLink>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
