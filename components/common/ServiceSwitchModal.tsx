"use client";

import { useEffect, useState } from "react";
import styles from "./ServiceSwitchModal.module.css";

interface ServiceSwitchModalProps {
  switchHref?: string;
}

const COOKIE_NAME = "service_switch_modal_seen";

export function ServiceSwitchModal({
  switchHref = "/clinical-trials",
}: ServiceSwitchModalProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasSeen = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${COOKIE_NAME}=`));

    if (!hasSeen) {
      setOpen(true);
    }
  }, []);

  const closeModal = () => {
    // Save cookie for 30 days
    document.cookie = `${COOKIE_NAME}=true; path=/; max-age=${
      60 * 60 * 24 * 30
    }; SameSite=Lax`;

    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className={styles.overlay}
      onClick={closeModal}
    >
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-switch-title"
      >
        <button
          type="button"
          className={styles.close}
          onClick={closeModal}
          aria-label="Close"
        >
          ✕
        </button>

        <div className={styles.content}>
          <h2 id="service-switch-title" className={styles.heading}>
            You are currently on our Care Support Services. If you would like
            to switch to Clinical Trials and Site Support Services, please
            switch here.
          </h2>

          <div className={styles.buttons}>
            <a
              href={switchHref}
              className={styles.primary}
              onClick={closeModal}
            >
              Switch Now
            </a>

            <button
              type="button"
              className={styles.secondary}
              onClick={closeModal}
            >
              Stay Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
