import Modal from "@/components/modal";
import React from "react";

import styles from "./profile-form-modal.module.css";
import clsx from "clsx";
import ProfileForm from "../porfileForm/profile-form";

const ProfileFormModal = ({ isOpen, onClose, user, countryList }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.container}>
        <p className={clsx("font-almrai", styles.instructions)}>
          {"يرجى اكمال كافة البيانات"}
          <br />
          {"بالشكل الصحيح"}
        </p>
        <ProfileForm user={user} countryList={countryList} />
      </div>
    </Modal>
  );
};

export default ProfileFormModal;
