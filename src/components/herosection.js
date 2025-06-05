import styles from "./herosection.module.css"
import Link from "next/link"

export default function Herosection() {
    return (
        <section>
            <div className={styles.herosectionDiv}>
                <video
                    className={styles.backgroundVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1,
                    }}
                >
                    <source src="/tintzoneVideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className={styles.overlay}></div>

                <div className={styles.heading}>
                    <h1 className={styles.tintzoneText}>Tint Zone</h1>
                    <p className={styles.tintzoneDescription}>At Tint Zone, we specialize in high-quality window tinting for cars, homes, and businesses—delivering comfort, privacy, and style with every job.</p>
                    <div className={styles.buttonsBox}>
                        <Link href="/services">
                            <button className={`${styles.ourInventory} ${styles.button}`}><span className={styles.span}>Our Services</span></button>
                        </Link>

                        <Link href="/about">
                            <button className={`${styles.learnMore} ${styles.button}`}><span className={styles.span}>Learn More</span></button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}