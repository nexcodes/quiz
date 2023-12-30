import Modal from "@/components/modal";
import React from "react";

import styles from "./profileIncompleteModal.module.css";
import Link from "next/link";
import clsx from "clsx";

const ProfileIncompleteModal = ({ isOpen, onClose, message }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.wrapper}>
        <p className={styles.message}>{message}</p>
        <button className={clsx("font-almrai", styles.button)}>
          <Link href="/profile">{"انتقل إلى الملف الشخصي"}</Link>
        </button>
      </div>
    </Modal>
  );
};

export default ProfileIncompleteModal;
