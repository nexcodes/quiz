import React from "react";

import styles from "./challenge.module.css";
import { Circle2 } from "@/components/icons/circle";
import Image from "next/image";
import clsx from "clsx";

const Challenge = () => {
  return (
    <section className={styles.bg}>
      <a name="challenge" />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.contentWrapper}>
            <h1 className={clsx("font-dg-bebo", styles.heading)}>
              {`تحدي الثلاثين على يوتيوب النجاح الذي تجاوز الحدود`}
            </h1>
            <p className={styles.paragraph} style={{ marginTop: "1rem" }}>
              {`في عالم يوتيوب حيث المنافسة شديدة، يبرز برنامج 'تحدي الثلاثين'
              كظاهرة فريدة. مع مشاهدات تتجاوز الملايين، يستمر البرنامج في كسر
              الحواجز وإثارة الإعجاب، مقدمًا تجربة ترفيهية معرفية لا مثيل لها.`}
            </p>
            <p className={styles.paragraph} style={{ marginTop: "1rem" }}>
              {` يتميز البرنامج بتقديمه المحتوى بشكل احترافي قوي، بمساعدة فريق
              متخصص من معدي البرامج والمنتجين، مما يجعله مصدرًا للمعلومات
              والمتعة لجميع أفراد العائلة. كل حلقة تقدم مزيجًا مثيرًا من الأسئلة
              الذكية، التفاعل الجماهيري، والتشويق الذي يبقي المشاهدين على أطراف
              المقاعد.`}
            </p>
          </div>
          <div className={styles.ImageWrapper}>
            <Image
              src="/video.png"
              alt=""
              fill
              loading="lazy"
              style={{ objectFit: "cover", zIndex: "10" }}
            />
            <Circle2 className={styles.circle} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
