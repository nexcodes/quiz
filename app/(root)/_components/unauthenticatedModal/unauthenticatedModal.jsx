import Modal from "@/components/modal";
import React from "react";

import styles from "./unauthenticatedModal.module.css";
import GoogleLogo from "@/components/icons/google-logo";
import { signIn } from "next-auth/react";

const UnauthenticatedModal = ({ isOpen, onClose }) => {

  const socialAction = (action) => {
    signIn(action, {
      redirect: true,
    })
      .then((callback) => {
      })
      .catch((e) => {
        console.log(e, "AuthForm error");
      });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.wrapper}>
        <p className={styles.message}>{"يجب عليك تسجيل الدخول للمتابعة"}</p>
        <button
          onClick={() => socialAction("google")}
          className={styles.oAuthButton}
        >
          {"التسجيل"}
          <GoogleLogo size={20} style={{ marginLeft: ".75rem" }} />
        </button>
      </div>
    </Modal>
  );
};

export default UnauthenticatedModal;
