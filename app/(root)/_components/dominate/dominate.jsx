import React from "react";

import styles from "./dominate.module.css";
import clsx from "clsx";
import DominateLogo from "@/components/icons/dominate";
import Link from "next/link";
import Instagram from "@/components/icons/instagram";

const Dominate = () => {
  return (
    <section className={styles.bg}>
      <a name="manufacture" />
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.logoHiddenMobile}>
            <DominateLogo />
          </div>
          <h3 className={clsx("font-dg-bebo", styles.heading)}>
            {`دومينيت - ريادة في عالم`}
            <br />
            {`التكنولوجيا والإبداع`}
          </h3>
          <p className={styles.paragraph} style={{ fontWeight: "700" }}>
            {`شركة 'دومينيت'، الرائدة في مجال تطوير التطبيقات والدعاية والإعلان،
            هي القوة الدافعة حول التحول الرقمي 'لتحدي الثلاثين'.`}
          </p>
          <p
            className={styles.paragraph}
            style={{
              color: "rgba(255, 255, 255, .75)",
              fontWeight: "300",
              fontSize: "1.25rem",
            }}
          >
            {`تتميز بكونها شركة مبتكرة ومتقدمة في مجال التكنولوجيا، حيث تمتلك فريق
            عمل متخصص ومبدع في الأردن، الكويت، والإمارات. تعمل دومينيت على إثراء
            السوق بمنتجاتها المتطورة والحلول الإبداعية، متبعة أعلى المعايير
            العالمية في التصميم والبرمجة. تسعى الشركة دائماً لتقديم أفضل تجربة
            لمستخدميها، مع التركيز على الجودة والابتكار`}
          </p>
          <div className={styles.wrapper}>
            <div className={styles.logoHiddenDesktop}>
              <DominateLogo />
            </div>
            <div>
              <div>
                <Link href="https://dominate.dev/" className={styles.url}>
                  https://dominate.dev
                </Link>
              </div>
              <div className={styles.alignRight}>
                <button className={styles.button}>
                  <Instagram className="icon" />
                  @dominate.dev
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dominate;
