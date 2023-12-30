import Modal from "@/components/modal";
import React from "react";

import styles from "./unauthenticatedModal.module.css";

const UnauthenticatedModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.wrapper}>
        <p className={styles.message}>{"يجب عليك تسجيل الدخول للمتابعة"}</p>
      </div>
    </Modal>
  );
};

export default UnauthenticatedModal;
