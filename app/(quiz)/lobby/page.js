"use client";

import styles from "./lobby.module.css";
import clsx from "clsx";
import Link from "next/link";
import Lottie from "lottie-react";

import circle from "@/animation/circle.json";

export default function Lobby() {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <Lottie animationData={circle} />
        <div className={styles.wrapper}>
          <h3 className={styles.heading}>
            {"عند الضغط على “ ابدأ الآن “ ستبدا اللعبة فوراً"}
          </h3>
          <p className={styles.instructions}>
            {"كل سؤال له 10 ثوانٍ للاجابة "}
          </p>
        </div>
        <div className={styles.wrapper}>
          <Link href="/quiz" className={clsx("font-dg-bebo", styles.button)}>
            {"ابدأ الآن"}
          </Link>
          <Link href="/" className={clsx("font-dg-bebo", styles.exit)}>
            {"خروج من الاختبار"}
          </Link>
        </div>
      </div>
    </div>
  );
}
