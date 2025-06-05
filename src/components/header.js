"use client";

import {useState} from "react"
import Link from "next/link"
import styles from "./header.module.css"
import Image from "next/image"

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(prev => !prev);
  };

    return (
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                <Image 
                className = {styles.logo}
                src="/tintzoneLogo.jpg"
                alt="logo"
                width={100}
                height={100}
                />

                <h1 className={styles.headerText}>Tint Zone</h1>
            </div>
            
      <nav className={styles.nav}>
        <div
          className={`${styles.menuContainer} ${
            isMenuVisible ? styles.menuContainerVisible : styles.menuContainerHidden
          }`}
        >
          <button className={styles.menuBtn} onClick={toggleMenu}>☰</button>

          <div className={styles.buttonsContainer}>
            <Link href="/home">
              <button className={`${styles.home} ${styles.headingbuttons}`}>Home</button>
            </Link>
            <Link href="/about">
              <button className={`${styles.about} ${styles.headingbuttons}`}>About</button>
            </Link>
            <Link href="/services">
              <button className={`${styles.services} ${styles.headingbuttons}`}>Services</button>
            </Link>
            <Link href="/gallery">
              <button className={`${styles.gallery} ${styles.headingbuttons}`}>Gallery</button>
            </Link>
            <Link href="/contact">
              <button className={`${styles.contact} ${styles.headingbuttons}`}>Contact</button>
            </Link>
          </div>
        </div>
      </nav>
        </header>
    )
}