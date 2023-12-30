import React from "react";

import styles from "./game-details.module.css";
import clsx from "clsx";

const GameDetails = () => {
  return (
    <section className={styles.bg}>
      <div className={styles.container}>
        <div>
          <h2 className={clsx("font-dg-bebo", styles.heading)}>
            {`تفاصيل اللعبة`}
          </h2>
          <p className={styles.paragraph} style={{ marginTop: "1rem" }}>
            {`:لعبة 'تحدي الثلاثين' تنقسم إلى أربعة جولات رئيسية،  كل جولة مصممة  لتقدم تجربة ترفيهية فريدة، تجمع بين المتعة والتعلم"`}
          </p>
        </div>
        <div className={styles.wrapper}>
          <div className={clsx(styles.groupParent , "order-1")}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <h6 className={styles.heading_6}>{`جولة التعويض`}</h6>
              <img className={styles.groupItem} alt="" src="group.png" />
              <img className={styles.layer1Icon} alt="" src="layer-1.png" />
            </div>
            <div className={styles.textCover}>
              <p className={styles.text}>{`فرصة للعودة القوية في اللعبة`}</p>
            </div>
          </div>
          <div className={clsx(styles.groupParent , "order-2")}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <h6 className={styles.heading_6}>{`جولة الجرس`}</h6>
              <img className={styles.groupItem} alt="" src="group.png" />
              <img className={styles.layer1Icon} alt="" src="layer-2.png" />
            </div>
            <div className={styles.textCover}>
              <p
                className={styles.text}
                style={{ left: "3rem" }}
              >{`تعتمد على سرعة البديهة`}</p>
            </div>
          </div>
          <div className={clsx(styles.groupParent , "order-3")}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <h6 className={styles.heading_6}>{`جولة المزاد`}</h6>
              <img className={styles.groupItem} alt="" src="group.png" />
              <img className={styles.layer1Icon} alt="" src="layer-3.png" />
            </div>
            <div className={styles.textCover}>
              <p
                className={styles.text}
                style={{ left: "3.5rem" }}
              >{`تدور حول الجرأة والتكتيك`}</p>
            </div>
          </div>
          <div className={clsx(styles.groupParent , "order-4")}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <h6 className={styles.heading_6}>{`جولة ماذا تعرف؟`}</h6>
              <img className={styles.groupItem} alt="" src="group.png" />
              <img className={styles.layer1Icon} alt="" src="layer-4.png" />
            </div>
            <div className={styles.textCover}>
              <p
                className={styles.text}
                style={{ left: "3.5rem" }}
              >{`تختبر معلوماتك العامة`}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameDetails;
