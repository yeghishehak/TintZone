"use client";
import { usePathname } from "next/navigation";

import styles from "./section1.module.css"
import Image from "next/image"

export default function Section1() {

  const pathname = usePathname();
  const isHome = pathname === "/";

    return (
        <section>
                <div className={`${styles.section1Div} ${isHome ? styles.atTop : ""}`}>
                <div className={styles.aboutUs}>
                    <h1 className={styles.welcomeText}>Welcome to <span className={styles.tintText}>Tint</span> <span className={styles.zoneText}>Zone</span></h1>
                    <p className={styles.aboutUsDescription}>
                        We are a dedicated team of professionals specializing in high-quality window tinting services for cars, homes, and businesses. Our mission is to enhance your comfort, privacy, and style with our top-notch tinting solutions.
                    </p>
                </div>

                <div className={styles.Image}>
                    <Image
                        className={styles.aboutUsImage}
                        src="/aboutusImage.jpg"
                        alt="About Us"
                        width={600}
                        height={400}
                        />
                </div>
            </div>
        </section>
    )
}