"use client";

import {useEffect} from "react";

import styles from "./section2.module.css";
import Image from "next/image";

export default function Section2() {
  useEffect(() => {
    const advantage = document.querySelectorAll(`.${styles.advantage}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.advantageSlideIn);
            observer.unobserve(entry.target); // Optional: animate once
          }
        });
      },
      { threshold: 0.3 }
    );

    advantage.forEach((el) => observer.observe(el));

    const ourAdvantagesText = document.querySelector(`.${styles.ourAdvantagesText}`);
    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.ourAdvantagesTextSlideIn);
            observer2.unobserve(entry.target); // Optional: animate once
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ourAdvantagesText) {
      observer2.observe(ourAdvantagesText);
    }

    return () => {
      advantage.forEach((el) => observer.unobserve(el));
      if (ourAdvantagesText) {
        observer2.unobserve(ourAdvantagesText);
      }
    };
  }, []);
    return (
        <section>
            <div className={styles.section2Div}>
                <h1 className={styles.ourAdvantagesText}>Our Advantages</h1>
                
                <div className={styles.ourAdvantagesContainer}>
                    <div className={`${styles.advantage} ${styles.firstAdvantage}`}>
                        <Image
                            className={styles.advantageImage}
                            src="/advantages/experience.png"
                            alt="Our Advantages"
                            width={100}
                            height={100}
                        />
                        <h1>Over Two Decades of Experience</h1>
                        <p>Since 2002, our team has been delivering expert tinting services, building a strong reputation through years of hands-on experience and customer satisfaction.</p>
                    </div>

                    <div className={`${styles.advantage} ${styles.secondAdvantage}`}>
                        <Image
                            className={styles.advantageImage}
                            src="/advantages/lightning.png"
                            alt="Our Advantages"
                            width={100}
                            height={100}
                        />
                        <h1>Fast & Reliable Service</h1>
                        <p>We value your time—expect quick, hassle-free service with consistent results you can count on.</p>
                    </div>

                    <div className={`${styles.advantage} ${styles.thirdAdvantage}`}>
                        <Image
                            className={styles.advantageImage}
                            src="/advantages/100.png"
                            alt="Our Advantages"
                            width={100}
                            height={100}
                        />
                        <h1>Satisfaction Guaranteed</h1>
                        <p>Your comfort and satisfaction come first; we’re not done until you’re fully happy with the result.</p>
                    </div>

                    <div className={`${styles.advantage} ${styles.fourthAdvantage}`}>
                        <Image
                            className={styles.advantageImage}
                            src="/advantages/price.png"
                            alt="Our Advantages"
                            width={100}
                            height={100}
                        />
                        <h1>Competitive Pricing</h1>
                        <p>Get the best value for your money with our affordable tinting solutions.</p>
                    </div>

                    <div className={`${styles.advantage} ${styles.fifthAdvantage}`}>
                        <Image
                            className={styles.advantageImage}
                            src="/advantages/uv.png"
                            alt="Our Advantages"
                            width={100}
                            height={100}
                        />
                        <h1>Advanced UV Protection</h1>
                        <p>Our films block up to 99% of harmful UV rays, helping protect your skin and preserve your vehicle’s interior.</p>
                    </div>

                    <div className={`${styles.advantage} ${styles.sixthAdvantage}`}>
                        <Image
                            className={styles.advantageImage}
                            src="/advantages/heat.png"
                            alt="Our Advantages"
                            width={100}
                            height={100}
                        />
                        <h1>Heat & Glare Reduction</h1>
                        <p>Enjoy a cooler, more comfortable ride while reducing glare and eye strain, especially in bright conditions.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}