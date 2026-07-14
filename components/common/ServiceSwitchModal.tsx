"use client";

import { useState } from "react";
import styles from "./ServiceSwitchModal.module.css";

interface ServiceSwitchModalProps {
  switchHref?: string;
}

export default function ServiceSwitchModal({
  switchHref = "/clinical-trials",
}: ServiceSwitchModalProps) {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={() => setOpen(false)}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          className={styles.close}
          onClick={() => setOpen(false)}
          aria-label="Close"
        >
          ✕
        </button>

        <div className={styles.content}>
          <h2 className={styles.heading}>
            You are currently on our Care Support Services. If you would like
            to switch to Clinical Trials and Site Support Services, please
            switch here.
          </h2>

          <div className={styles.buttons}>
            <a href={switchHref} className={styles.primary}>
              Switch Now
            </a>

            <button
              className={styles.secondary}
              onClick={() => setOpen(false)}
            >
              Stay Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
