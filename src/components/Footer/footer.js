import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className={styles.footerDiv}>
                <div className={styles.footerDivLeft}>
                    <Image
                    src="/tintzoneLogo.jpg"
                    width={100}
                    height={100}
                    alt="Tint Zone Logo"
                    className={styles.footerLogo}
                    />

                    <h1 className={styles.tintzoneText}>Tint Zone</h1>

                    <div className={styles.links}>
                        <a href="https://www.instagram.com/tint__zone/" target="_blank">
                        <Image
                            src="/instagram.png"
                            width={30}
                            height={30}
                            alt="Instagram Logo"
                            className={styles.footerInstagram}
                        />
                        </a>
                    </div>
                </div>
                <div className={styles.footerDivRight}>
                    <div className={styles.contactUs}>
                        <h2 className={styles.contactUsTitle}>Contact us</h2>
                        <p>Email: <a href="mailto:TintZone7@gmail.com">TintZone7@gmail.com</a></p>
                        <p>Phone: <a href="tel:+17473337179">+1 (747) 333-7179</a></p>
                        <p>Address: <a href='https://maps.app.goo.gl/iw9MhzuLmRrgDKSt9'>Los Angeles, CA</a></p>
                    </div>
                </div>
            </div>

            <div className={styles.footerRights}>
                <h1 className={styles.rightsH1}>© 2025 Tint Zone. All rights reserved.</h1>
                <Link href="/terms-of-service" className={styles.rightsTerms}>Terms of Service</Link>
                <Link href="/privacy-policy" className={styles.rightsPrivacy}>Privacy Policy</Link>
            </div>
        </footer>
    );
}