"use client";

import { useState } from "react";
import styles from"./faq.module.css";

const faqs = [
  {
    question: "Is window tinting legal in my state?",
    answer: "Tinting laws vary by state. Always check your local regulations or ask us for guidance.",
  },
  {
    question: "How long does the tint last?",
    answer: "High-quality tint can last 5–10 years depending on care and climate.",
  },
  {
    question: "How should I care for my tinted windows?",
    answer: "Avoid cleaning for the first few days. Use soft cloths and ammonia-free cleaners.",
  },
  {
    question: "Can I remove or replace my tint later?",
    answer: "Yes, tint can be removed or replaced without damaging your windows.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqWrapper}>
      <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <button className={styles.faqQuestion} onClick={() => toggle(index)}>
            {faq.question}
            <span>{openIndex === index ? "−" : "+"}</span>
          </button>
          <div className={`${styles.faqAnswerWrapper} ${openIndex === index ? styles.open : ""}`}>
            <div className={styles.faqAnswer}>{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
