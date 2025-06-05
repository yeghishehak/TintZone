'use client';

import styles from './contactus.module.css';
import { usePathname } from 'next/navigation';


export default function ContactUs() {
  const pathname = usePathname();

  const isHomePage = pathname === '/'; 

    return(
        <section className={styles.section}>
            <div className={`${styles.contactAll} ${isHomePage ? styles.noPadding : ''}`}>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2740443242!2d-118.69193081831067!3d34.02016130660796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0b4463c2d23%3A0x6db6e0d8824d8a24!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1717604490401!5m2!1sen!2sus"
                        className={styles.google_map}
                        width="600"
                        height="450"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className={styles.feedback_container}>
                    <h1 className={styles.feedback_heading}>Contact Us​</h1>

                    <h1 className={styles.feedback_heading2}>Feedback</h1>
                    <p className={styles.feedback_email}>+1 (412) 401-2466 <br />TintZone7@gmail.com</p>

                    <h1 className={styles.feedback_heading3}>Address</h1>
                    <p className={styles.feedback_address}>Los Angeles, CA</p>

                    <h1 className={styles.feedback_heading4}>Working Hours</h1>
                    <p className={styles.feedback_worktimes}>Monday - Saturday 10:00-19:00</p>
                </div>
            </div>
        </section>
    )
}