import { Circle3 } from "@/components/icons/circle";
import styles from "./lobby.module.css";
import clsx from "clsx";
import Link from "next/link";

export default function Lobby() {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <Circle3 width={120} height={120} />
        <h3 className={styles.heading}>
          {"عند الضغط على “ ابدأ الآن “ ستبدا اللعبة فوراً"}
        </h3>
        <p className={styles.instructions}>{"كل سؤال له 10 ثوانٍ للاجابة "}</p>
        <Link href="/quiz" className={clsx("font-dg-bebo", styles.button)}>
          {"ابدأ الآن"}
        </Link>
        <Link href="/" className={clsx("font-dg-bebo", styles.exit)}>
          {"خروج من الاختبار"}
        </Link>
      </div>
    </div>
  );
}
