"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

import styles from "./profile-form.module.css";
import axios from "axios";
import { Spinner } from "@/components/spinner";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import clsx from "clsx";

const ProfileForm = ({ user, countryList, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: user?.firstName || "",
      last_name: user?.lastName || "",
      email: user?.email || "",
      phone_country_code: user?.phoneExtension || "",
      phone_number: user?.phone?.split(user?.phoneExtension)[1] || "",
      country: user?.countryId || "",
    },
  });

  const onSubmit = async (values) => {
    try {
      setIsLoading(true);

      const body = {
        dto: {
          firstName: values.first_name,
          lastName: values.last_name,
          email: values.email,
          countryId: values.country,
        },
      };

      if (values.phone_country_code + values.phone_number !== user?.phone) {
        body.dto.phone = values.phone_country_code + values.phone_number;
      }

      const res = await axios.post("/api/updateUser", body);

      if (res.status === 200) {
        if (res?.data?.message) {
          toast.success(res?.data?.message);
        }

        if (res?.data?.error?.message) {
          toast.error(res?.data?.error?.message);
        }

        onClose();
        router.refresh();
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.wrapper}>
        <label className={styles.label}>{"الاسم الأول"}</label>
        <input className={styles.input} {...register("first_name")} />
      </div>
      <div className={styles.wrapper}>
        <label className={styles.label}>{"الاسم الأخير"}</label>
        <input className={styles.input} {...register("last_name")} />
      </div>
      <div className={styles.wrapper}>
        <label className={styles.label}>{"الايميل"}</label>
        <input className={styles.input} {...register("email")} />
      </div>
      <div className={styles.wrapper}>
        <label className={styles.label}>{"رقم الموبايل"}</label>
        <div className={styles.flex}>
          <select
            {...register("phone_country_code")}
            className={clsx(styles.input, styles.width)}
          >
            {countryList &&
              countryList.map((country) => (
                <option
                  key={country.phoneCountryCode}
                  value={country.phoneCountryCode}
                >
                  {country.phoneCountryCode}
                </option>
              ))}
          </select>
          <input className={styles.input} {...register("phone_number")} />
        </div>
      </div>
      <div className={styles.wrapper}>
        <label className={styles.label}>{"دولة المشاركة"}</label>
        <select className={styles.input} {...register("country")}>
          {countryList &&
            countryList.map((country) => (
              <option key={country.title} value={country.id}>
                {country.title}
              </option>
            ))}
        </select>
      </div>
      <button type="submit" className={styles.button}>
        {isLoading ? <Spinner size={24} /> : "حفظ"}
      </button>
    </form>
  );
};

export default ProfileForm;
