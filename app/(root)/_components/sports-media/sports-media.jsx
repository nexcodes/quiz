import React from "react";

import styles from "./sports-media.module.css";
import { Circle2, MiniCircle } from "@/components/icons/circle";
import Image from "next/image";
import clsx from "clsx";
import Youtube from "@/components/icons/youtube";

const SportsMedia = () => {
  return (
    <section className={styles.bg}>
      <a name="assistant" />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.ImageWrapper}>
            <Image src="/human.png" alt="" fill loading="lazy"/>
            <Circle2 className={styles.circle} />
            <MiniCircle className={styles.miniCircle} />
          </div>
          <div className={styles.contentWrapper}>
            <h1 className={clsx("font-dg-bebo", styles.heading)}>
              {` مساعد الفوزان أيقونة الرياضة والإعلام`}
            </h1>
            <p className={styles.paragraph} style={{ marginTop: "1rem" }}>
              {`مساعد الفوزان، الاسم الذي يُعتبر مرادفًا للتميز في عالم الرياضة
              والإعلام. بدأ حياته المهنية كلاعب كرة قدم متميز، ومن ثم انتقل إلى
              عالم الإعلام، حيث أبدع في تقديم برنامج 'تحدي الثلاثين'.`}
            </p>
            <p className={styles.paragraph} style={{ marginTop: "1rem" }}>
              {`يعرض هذا البرنامج الذي حاز على إعجاب الملايين، تحديات ذهنية
              ومعرفية بأسلوب مشوق وتفاعلي. مساعد الفوزان، بخبرته وكاريزمته، ليس
              فقط قدوة للشباب بل أيضًا مصدر إلهام لكل من يطمح للتميز.`}
            </p>
            <div className={styles.buttonWrapper}>
              <a
                className={styles.button}
                target="_blank"
                href="https://www.youtube.com/@MUSAEDALFOUZAN"
              >
                <Youtube className="icon" />
                M12 ALFOUZAN{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsMedia;
