import { LuLoader2 } from "react-icons/lu";

import styles from "@/styles/spinner.module.css";
import clsx from "clsx";

export const Spinner = ({ size, className, ...props }) => {
  return (
    <LuLoader2
      size={size}
      className={clsx(styles.animate_spin, className)}
      {...props}
    />
  );
};
