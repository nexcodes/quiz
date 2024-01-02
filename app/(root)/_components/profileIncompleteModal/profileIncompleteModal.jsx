import Modal from "@/components/modal";
import React from "react";

import styles from "./profileIncompleteModal.module.css";
import Link from "next/link";

const ProfileIncompleteModal = ({ isOpen, onClose, message }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.wrapper}>
        <p className={styles.message}>{message?.text || ""}</p>
        {message?.code !== 3001 && (
          <div className={styles.cover}>
            <Link href="/profile" className={styles.button}>
              {"تحديث الملف الشخصي"}
            </Link>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ProfileIncompleteModal;
