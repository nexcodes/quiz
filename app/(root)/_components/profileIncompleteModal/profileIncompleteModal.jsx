import Modal from "@/components/modal";
import React from "react";

import styles from "./profileIncompleteModal.module.css";

const ProfileIncompleteModal = ({ isOpen, onClose, message }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.wrapper}>
        <p className={styles.message}>{message}</p>
      </div>
    </Modal>
  );
};

export default ProfileIncompleteModal;
