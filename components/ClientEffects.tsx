"use client";

import { useEffect } from "react";

const revealTargets = [
  ".section-title",
  ".service-card",
  ".compliance__inner",
  ".trust__media",
  ".trust__content",
  ".review-brand",
  ".review-card",
  ".video-card",
  ".cta__inner",
  ".location-grid a",
  ".footer__brand",
  ".footer nav",
  ".footer__bottom"
];

export function ClientEffects() {
  useEffect(() => {
    const preventZoomWheel = (event: WheelEvent) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    const preventZoomKeys = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && ["+", "-", "=", "0", "_"].includes(event.key)) {
        event.preventDefault();
      }
    };

    const preventMultiTouchZoom = (event: TouchEvent) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    };

    const preventGesture = (event: Event) => {
      event.preventDefault();
    };

    window.addEventListener("wheel", preventZoomWheel, { passive: false });
    window.addEventListener("keydown", preventZoomKeys);
    window.addEventListener("touchmove", preventMultiTouchZoom, { passive: false });
    window.addEventListener("gesturestart", preventGesture);
    window.addEventListener("gesturechange", preventGesture);
    window.addEventListener("gestureend", preventGesture);

    const revealElements = revealTargets.flatMap((selector) => Array.from(document.querySelectorAll<HTMLElement>(selector)));

    if (!("IntersectionObserver" in window) || !revealElements.length) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return () => {
        window.removeEventListener("wheel", preventZoomWheel);
        window.removeEventListener("keydown", preventZoomKeys);
        window.removeEventListener("touchmove", preventMultiTouchZoom);
        window.removeEventListener("gesturestart", preventGesture);
        window.removeEventListener("gesturechange", preventGesture);
        window.removeEventListener("gestureend", preventGesture);
      };
    }

    revealElements.forEach((element, index) => {
      element.classList.add("reveal-on-scroll");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 45}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      window.removeEventListener("wheel", preventZoomWheel);
      window.removeEventListener("keydown", preventZoomKeys);
      window.removeEventListener("touchmove", preventMultiTouchZoom);
      window.removeEventListener("gesturestart", preventGesture);
      window.removeEventListener("gesturechange", preventGesture);
      window.removeEventListener("gestureend", preventGesture);
    };
  }, []);

  return null;
}
