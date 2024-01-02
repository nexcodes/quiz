"use client";

import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import styles from "@/styles/navbar.module.css";
import PlayStore from "./icons/play-store";
import Huawei from "./icons/huawei";
import Apple from "./icons/apple";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import GoogleLogo from "./icons/google-logo";
import AppleLogo from "./icons/apple-logo";
import { signIn, useSession } from "next-auth/react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const session = useSession();

  const socialAction = (action) => {
    signIn(action, {
      redirect: true,
    })
      .then((callback) => {})
      .catch((e) => {
        console.log(e, "AuthForm error");
      });
  };

  return (
    <>
      <div className={styles.bg}>
        <div className={styles.container}>
          <div className={styles.desktop}>
            {session?.data?.token ? (
              <button className={styles.oAuthButton}>
                <Link className={styles.links} href="/profile">
                  {"حسابي"}
                </Link>
              </button>
            ) : (
              <>
                <button
                  onClick={() => socialAction("google")}
                  className={styles.oAuthButton}
                >
                  {"التسجيل"}
                  <GoogleLogo size={20} style={{ marginLeft: ".75rem" }} />
                </button>
                {/* <button
                  onClick={() => socialAction("apple")}
                  className={styles.oAuthButton}
                >
                  {"التسجيل"}
                  <AppleLogo size={24} style={{ marginLeft: ".75rem" }} />
                </button> */}
              </>
            )}
          </div>
          <ul className={clsx(styles.navLinks, styles.desktop)}>
            <li className={styles.links}>
              <a
                style={{ color: "inherit", textDecoration: "none" }}
                href="/privacy"
              >{`سياسة الخصوصية`}</a>
            </li>
            <li className={styles.links}>
              <a
                style={{ color: "inherit", textDecoration: "none" }}
                href="/#manufacture"
              >{`الشركة المصنعة`}</a>
            </li>
            <li className={styles.links}>
              <a
                style={{ color: "inherit", textDecoration: "none" }}
                href="/#challenge"
              >{`برنامج تحدي الثلاثين`}</a>
            </li>
            <li className={styles.links}>
              <a
                style={{ color: "inherit", textDecoration: "none" }}
                href="/#assistant"
              >{`مساعد الفوزان`}</a>
            </li>
            <li className={styles.links}>
              <a
                style={{ color: "inherit", textDecoration: "none" }}
                href="/#thirty-challenge"
              >{`تحدي الثلاثين`}</a>
            </li>
          </ul>
          <div className={styles.mobile}>
            <FiMenu
              className={styles.menu}
              size={30}
              onClick={() => setToggleMenu((prev) => !prev)}
            />
          </div>
          <div className={styles.logoContainer}>
            <Link href="/">
              <Image
                src="/logo.png"
                alt=""
                fill
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.mobileNav} hidden={!toggleMenu}>
        <IoIosClose
          className={styles.menu}
          size={50}
          onClick={() => setToggleMenu((prev) => !prev)}
        />

        <div className={styles.wrapper}>
          <ul className={styles.navLinks}>
            <li
              onClick={() => setToggleMenu((prev) => !prev)}
              className={styles.links}
            >
              <a
                style={{ color: "inherit", textDecoration: "none" }}
                href="#thirty-challenge"
              >{`تحدي الثلاثين`}</a>
            </li>
            <li
              onClick={() => setToggleMenu((prev) => !prev)}
              className={styles.links}
            >
              <a
                style={{ color: "inherit", textDecoration: "none" }}
                href="#assistant"
              >{`مساعد الفوزان`}</a>
            </li>
            <li
              onClick={() => setToggleMenu((prev) => !prev)}
              className={styles.links}
            >
              <a
                style={{ color: "inherit", textDecoration: "none" }}
                href="#challenge"
              >{`برنامج تحدي الثلاثين`}</a>
            </li>

            <li
              onClick={() => setToggleMenu((prev) => !prev)}
              className={styles.links}
            >
              <a
                style={{ color: "inherit", textDecoration: "none" }}
                href="#manufacture"
              >{`الشركة المصنعة`}</a>
            </li>
          </ul>
          <button
            onClick={() => socialAction("google")}
            className={styles.oAuthButton}
          >
            {"التسجيل"}
            <GoogleLogo size={20} style={{ marginLeft: ".75rem" }} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
