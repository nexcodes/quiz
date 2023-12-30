"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Cross from "./icons/cross";

import styles from "@/styles/modal.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className={styles.dialog} onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter={styles.transitionEnter}
          enterFrom={styles.opacity_0}
          enterTo={styles.opacity_100}
          leave={styles.transitionLeave}
          leaveFrom={styles.opacity_100}
          leaveTo={styles.opacity_0}
        >
          <div className={styles.bg_opacity} />
        </Transition.Child>

        <div className={styles.wrapper}>
          <div className={styles.innerWrapper}>
            <Transition.Child
              as={Fragment}
              enter={styles.transitionEnter}
              enterFrom={styles.wrapper_transition_1}
              enterTo={styles.wrapper_transition_2}
              leave={styles.transitionLeave}
              leaveFrom={styles.wrapper_transition_2}
              leaveTo={styles.wrapper_transition_1}
            >
              <Dialog.Panel className={styles.dialog_panel}>
                <div className={styles.cover}>
                  <button
                    type="button"
                    className={styles.button}
                    onClick={onClose}
                  >
                    <span className={styles.sr_only}>Close</span>
                    <Cross width={16} height={16} />
                  </button>
                </div>

                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
