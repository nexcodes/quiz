import Link from "next/link";
import styles from "./success.module.css";

export default function Success({ url, title, subtitle }) {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <div className={styles.header}>{"اختبار القدرات"}</div>
        <div className={styles.wrapper}>
          <picture>
            <img src={url} alt="" width={120} height={120} />
          </picture>
          <h3 className={clsx("font-dg-bebo", styles.heading)}>{title}</h3>
          <p className={styles.message}>{subtitle}</p>
          <Link href="/" className={clsx("font-dg-bebo", styles.button)}>
            {"الصفحة الرئيسية"}
          </Link>
        </div>
      </div>
    </div>
  );
}
