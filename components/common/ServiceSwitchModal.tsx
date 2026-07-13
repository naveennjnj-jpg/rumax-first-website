"use client";

import { useState } from "react";
import styles from "./ServiceSwitchModal.module.css";

interface ServiceSwitchModalProps {
  switchHref?: string;
}

export function ServiceSwitchModal({
  switchHref = "/clinical-trials",
}: ServiceSwitchModalProps) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    console.log("closing modal"); // remove after confirming this fixes it
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      role="presentation"
      onClick={handleClose}
    >
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-switch-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2>Do you want to switch to clinical Trials and site support service?</h2>
        <p id="service-switch-title" className={styles.text}>
          You are currently on our Care Support Services. If you'd like to
          switch to Clinical Trials and Site Support services, please switch
          here.
        </p>

        <div className={styles.actions}>
          <a href={switchHref} className={styles.switchButton}>
            Switch
          </a>
          <button
            type="button"
            className={styles.stayButton}
            onClick={handleClose}
          >
            Stay Here
          </button>
        </div>
      </div>
    </div>
  );
}
