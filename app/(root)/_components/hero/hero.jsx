"use client";

import React, { useState } from "react";

import styles from "./hero.module.css";
import Circle, { Circle2 } from "@/components/icons/circle";
import Image from "next/image";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import axios from "axios";
import ProfileIncompleteModal from "../profileIncompleteModal/profileIncompleteModal";
import { useRouter } from "next/navigation";
import UnauthenticatedModal from "../unauthenticatedModal/unauthenticatedModal";

const Hero = () => {
  const session = useSession();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({text: "" , code: 0});
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenUnAuthModal, setIsOpenUnAuthModal] = useState(false);

  const checkUser = async () => {
    if (session.status === "unauthenticated") {
      setIsOpenUnAuthModal(true);
      return;
    }

    if (session.status === "authenticated") {
      try {
        setIsLoading(true);

        const res = await axios.post("/api/verifyUser", {
          token: session?.data?.token,
        });

        console.log(res);

        if (!res.data.succeeded) {
          setMessage({
            text: res.data.error.message,
            code: res.data.error.code
          });
          setIsOpen(true);
          return;
        }

        router.push("/lobby");
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section className={styles.bg}>
      <ProfileIncompleteModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message={message}
      />
      <UnauthenticatedModal
        isOpen={isOpenUnAuthModal}
        onClose={() => setIsOpenUnAuthModal(false)}
      />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.ImageWrapper}>
            <Image src="/smart-phone.png" alt="" fill loading="lazy" />
            <Circle />
          </div>
          <div className={styles.contentWrapper}>
            <h1 className={clsx("font-dg-bebo", styles.heading)}>
              {`تحدي الثلاثين أكثر`}
              <br />
              {`!من مجرد لعبة`}
            </h1>
            <p className={styles.paragraph} style={{ marginTop: "1rem" }}>
              {`أهلاً بكم في 'تحدي الثلاثين ، حيث تتحول كل ثانية إلى فرصة لإثبات
              الذكاء والمعرفة. هذه اللعبة هي بوابتكم لعالم مليء بالتحديات
              الذهنية والمنافسة الشيقة. هنا، كل سؤال يفتح آفاقًا جديدة للفكر
              والإبداع، وكل جولة تقودكم إلى مستويات أعلى من التحدي والإثارة.`}
            </p>
            {!(session.status === "loading") && (
              <div className={styles.buttonWrapper}>
                <button
                  disabled={isLoading}
                  onClick={checkUser}
                  className={clsx("font-almrai", styles.button)}
                >
                  {"اشترك الآن"}
                </button>
              </div>
            )}
          </div>
        </div>
        <Circle2 className={styles.circle} />
      </div>
    </section>
  );
};

export default Hero;
