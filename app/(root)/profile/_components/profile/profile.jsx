"use client";

import React, { useState } from "react";
import { CiSettings } from "react-icons/ci";
import ProfileFormModal from "../profileFormModal/profile-form-modal";
import { signOut, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { toast } from "react-toastify";

import styles from "./profile.module.css";
import BackendManager from "@/components/BackendManager/home";
import axios from "axios";

const Profile = ({ user, countryList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const session = useSession();
  const router = useRouter();

  if (session?.status === "loading") {
    return <main className={styles.main}></main>;
  }

  if (session?.status === "unauthenticated") {
    redirect("/");
  }

  const deactivateAccount = async () => {
    const res = await axios.post("/api/deactivateUser");

    if (res.data?.succeeded) {
      toast.success("تم تعطيل الحساب بنجاح", {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      await signOut();

      router.push("/");
    } else {
      toast.warn("حدث خطأ أثناء إرسال النموذج", {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const handelLogout = async () => {
    await BackendManager.Logout(session.data.token);
    await signOut();
    router.push("/");
  };

  return (
    <>
      <ProfileFormModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        user={user}
        countryList={countryList}
      />
      <div className={styles.container}>
        <div className={styles.settings}>
          <CiSettings size={24} onClick={() => setIsOpen(true)} />
        </div>
        <div>
          <picture>
            <img
              src={session.data?.image}
              alt="profile picture"
              width={150}
              height={150}
              className={styles.image}
            />
          </picture>
        </div>
        <p className={styles.name}>{session.data?.name}</p>
        <div className={styles.buttons}>
          <button
            onClick={handelLogout}
            className={styles.button}
            style={{ backgroundColor: "#A0A0A0" }}
          >
            {"تسجيل الخروج"}
          </button>
          <button
            onClick={deactivateAccount}
            className={styles.button}
            style={{ backgroundColor: "#FE5F5E" }}
          >
            {" "}
            {"تعطيل الحساب"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
