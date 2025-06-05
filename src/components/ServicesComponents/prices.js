import styles from "./prices.module.css"
import Image from "next/image"

export default function Prices() {
  return (
    <div className={styles.pricesDiv}>
        <h1 className={styles.pricesHeading}>Our Prices</h1>

        <div className={styles.pricesContainer}>
            <div className={styles.carbonDiv}>
                <Image
                className={styles.carbonImage}
                src="/services/carbon.png"
                alt="carbon image"
                width={300}
                height={200}
                 />

                 <div className={styles.carbonText}>
                     <h1>Carbon Tinting</h1>
                     <p>Carbon window tint offers excellent heat rejection, UV protection, and a sleek, non-reflective finish. It’s a durable, fade-resistant option that enhances privacy and improves comfort without interfering with electronics.</p>
                     <p className={styles.priceName}>Price For a Window: $30</p>
                 </div>
            </div>

            <div className={styles.ceramicDiv}>
                <Image
                className={styles.ceramicImage}
                src="/services/ceramic.png"
                alt="ceramic image"
                width={300}
                height={200} // not using this, it will be in css file
                 />

                 <div className={styles.ceramicText}>
                     <h1>Ceramic Tinting</h1>
                     <p>Ceramic window tint provides top-tier heat and UV rejection using advanced non-metallic, nano-ceramic particles. It offers superior clarity, doesn&apos;t interfere with electronics, and delivers maximum comfort, durability, and protection for vehicles, homes, or offices.</p>
                     <p className={styles.priceName}>Price For a Window: $50</p>
                 </div>
            </div>
        </div>
    </div>
  )
}