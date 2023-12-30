"use client";

import styles from "./contact.module.css";
import clsx from "clsx";
import { Circle2 } from "@/components/icons/circle";
import BackendManager from "@/components/BackendManager/home";
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = {
        Name: name,
        Email: email,
        Message: message,
      };

      const res = await BackendManager.sendContactRequest(data);

      if (res?.data) {
        setName("");
        setEmail("");
        setMessage("");
        toast.success("شكرا لتواصلك معنا سوف يتم الرد باسرع وقت ممكن", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        setName("");
        setEmail("");
        setMessage("");
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
    } catch (error) {
      setName("");
      setEmail("");
      setMessage("");
      console.error("An error occurred while submitting the form:", error);
      // Handle the error in a way that makes sense for your application
      toast.error("حدث خطأ أثناء إرسال النموذج", {
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

  return (
    <section className={styles.bg}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.contentWrapper}>
            <h1 className={clsx("font-dg-bebo", styles.heading)}>
              {`للتواصل معنا والرعايات`}
            </h1>
            <p className={styles.paragraph} style={{ marginTop: "1rem" }}>
              {`لا تتردد في التواصل معنا، نحن هنا لتلبية احتياجاتكم وتقديم
              المساعدة بكل اهتمام..`}
            </p>
          </div>
          <form className={styles.contactWrapper} onSubmit={handelSubmit}>
            <div style={{ width: "100%" }}>
              <label className={styles.label}>{`الإسم`}</label>
              <input
                required
                type="text"
                className={`${styles.input} `}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div style={{ width: "100%" }}>
              <label className={styles.label}>{`الإيميل`}</label>
              <input
                required
                type="email"
                className={`${styles.input}`}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div style={{ width: "100%" }}>
              <label className={styles.label}>{`الرسالة`}</label>
              <textarea
                required
                type="text"
                className={`${styles.input}`}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                rows={4}
                style={{ borderRadius: ".5rem" }}
              />
            </div>
            <div className={styles.buttonWrapper}>
              <button type="submit" className={styles.button}>{`ارسال`}</button>
            </div>
          </form>
          <Circle2 className={styles.circle} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
