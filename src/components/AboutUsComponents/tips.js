"use client";
import { useEffect } from "react";
import styles from "./tips.module.css"
import { usePathname } from "next/navigation";

const tips = [
  "Avoid rolling down your windows for at least 3 days after tinting.",
  "Gently wipe any dust or haze that appears during curing — it’s normal and temporary.",
  "Use ammonia-free glass cleaner to clean your tinted windows.",
  "Don't use sharp tools or abrasive cloths on tinted glass.",
  "Park in the shade to help your tint last longer.",
];

export default function TipsSection() {

    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
    const tipItems = document.querySelectorAll(`.${styles.tipItem}`);

    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            entry.target.classList.add(styles.TipsSlideIn);
            observer.unobserve(entry.target); // animate once
            }
        });
        },
        { threshold: 0.3 }
    );

    tipItems.forEach((item) => observer.observe(item));

    return () => {
        tipItems.forEach((item) => observer.unobserve(item));
    };
    }, []);

  return (
    <div className={styles.tipsSection} style={{ padding: isHome ? "0" : "40px 20px" }}>
      <h2 className={styles.tipsTitle}>Tinting Care & Tips</h2>
      <ul className={styles.tipsList}>
        {tips.map((tip, index) => (
          <li key={index} className={styles.tipItem}>
            <span className={styles.tipDot}>★</span>
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}
