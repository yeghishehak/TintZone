"use client";
import { useState } from "react";
import styles from "./section.module.css";
import Image from "next/image";

const mediaItems = [
  { type: "image", src: "/gallery/car1.jpg" },
  { type: "image", src: "/gallery/car2.jpg" },
  { type: "image", src: "/gallery/car3.jpg" },
  { type: "video", src: "/gallery/carVideo1.mp4", poster: "/gallery/carVideo1.jpg" },
  { type: "video", src: "/gallery/carVideo2.mp4", poster: "/gallery/carVideo2.jpg" },
  { type: "video", src: "/gallery/carVideo3.mp4", poster: "/gallery/carVideo3.png" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section className={styles.gallerySection}>
      <h1 className={styles.galleryText}>Gallery</h1>
      <div className={styles.galleryGrid}>
        {mediaItems.map((item, index) => (
          <div key={index} className={styles.galleryItem} onClick={() => setSelected(item)}>
            {item.type === "video" ? (
              <video
                src={item.src}
                poster={item.poster}
                muted
                playsInline
                preload="metadata"
                style={{ backgroundImage: `url(${item.poster})` }}
                className={styles.thumbnail}
                onMouseOver={(e) => !isMobile && e.target.play()}
                onMouseOut={(e) => !isMobile && e.target.pause()}
              />
            ) : (
              <Image src={item.src} className={styles.thumbnail} alt={`Gallery item ${index}`} width={300} height={200} />
            )}
          </div>
        ))}
      </div>

      {selected && (
        <div className={styles.overlay} onClick={() => setSelected(null)}>
          <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setSelected(null)}>×</button>
            {selected.type === "video" ? (
              <video src={selected.src} controls autoPlay className={styles.popupMedia} />
            ) : (
              <Image src={selected.src} alt="Popup" width={500} height={500} className={styles.popupMedia} />
            )}
          </div>
        </div>
      )}

      <div className={styles.moreDiv}>
        <a href="https://www.instagram.com/tint__zone/" target="_blank" className={styles.moreText}>More</a>
      </div>
    </section>
  );
}
