import React from "react";

import styles from "./thirty-challenge.module.css";
import Circle from "@/components/icons/circle";
import Image from "next/image";
import clsx from "clsx";
import {
  AvailableOnAppGallery,
  AvailableOnAppStore,
  AvailableOnGooglePlay,
} from "@/components/icons/available-on";

const ThirtyChallenge = () => {
  return (
    <section className={styles.bg}>
      <a name="thirty-challenge"/>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.iconsWrapperMobile}>
            <AvailableOnAppStore />
            <AvailableOnGooglePlay />
            <AvailableOnAppGallery />
          </div>

          <div className={styles.ImageWrapper}>
            <Image
              src="/mobile.png"
              alt=""
              fill
              loading="lazy"
              style={{ objectFit: "contain" }}
            />
            <Circle />
          </div>
          <div className={styles.contentWrapper}>
            <h1 className={clsx("font-dg-bebo", styles.heading)}>
              {`تحدي الثلاثين `}
              <br />
              {`!الآن في جيبك`}
            </h1>
            <p className={styles.paragraph}>
              {`الآن أصبح بإمكانكم حمل حماس 'تحدي الثلاثين' في جيوبكم! التطبيق متاح للتحميل على منصات الآيفون، الأندرويد وهواوي. `}
            </p>
            <p className={styles.paragraph}>
              {`مع هذا التطبيق، يمكنكم خوض تجربة البرنامج الفريدة في أي وقت ومكان. استمتعوا بتحديات يومية، تفاعلوا مع مستخدمين آخرين، وارتقوا بمستوى مهاراتكم الذهنية والمعرفية. التطبيق يجمع بين التصميم الجذاب، الواجهة السهلة الاستخدام، ومحتوى متجدد يضمن لكم تجربة ممتعة ومفيدة`}
            </p>
            <div className={styles.iconsWrapperDesktop}>
              <AvailableOnAppStore />
              <AvailableOnGooglePlay />
              <AvailableOnAppGallery />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirtyChallenge;
