import React from "react";
import Facebook from "./icons/twitter";
import Youtube from "./icons/youtube";
import Instagram from "./icons/instagram";
import Image from "next/image";

import styles from "@/styles/footer.module.css";
import clsx from "clsx";
import Link from "next/link";
import Twitter from "./icons/twitter";

const Footer = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <div className={styles.icons}>
          <a target="_blank" href="https://x.com/Msa3edALfouzan?s=20">
            <Twitter className={clsx(styles.icon, "cursor-pointer")} />
          </a>
          <a
            target="_blank"
            href="https://instagram.com/msa3edalfouzan?igshid=MzMyNGUyNmU2YQ=="
          >
            <Instagram className={clsx(styles.icon, "cursor-pointer")} />
          </a>

          <a target="_blank" href="https://www.youtube.com/@MUSAEDALFOUZAN">
            {" "}
            <Youtube className={clsx(styles.icon, "cursor-pointer")} />
          </a>
        </div>

        <div className={styles.logoContainer}>
          <Link href="/">
            <Image src="/logo.png" alt="" fill style={{ objectFit: "cover" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
