import styles from "./policy.module.css";

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Privacy Policy</h1>
      <p className={styles.updated}>Last updated: June 4, 2025</p>

      <p className={styles.p}>
        This website (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy. We do not collect, store,
        or share any personal information from users visiting our site.
      </p>

      <h2 className={styles.h2}>1. No Personal Information Collected</h2>
      <p className={styles.p}>
        We do not request, collect, or store any personal data such as your name, email address,
        phone number, or IP address.
      </p>

      <h2 className={styles.h2}>2. No Cookies or Tracking</h2>
      <p className={styles.p}>
        This site does not use cookies, local storage, tracking pixels, analytics tools, or
        third-party scripts to gather data about your behavior.
      </p>

      <h2 className={styles.h2}>3. External Links</h2>
      <p className={styles.p}>
        Our website may contain links to other websites. We are not responsible for their content
        or privacy practices. Please read their privacy policies separately.
      </p>

      <h2 className={styles.h2}>4. Children&apos;s Privacy</h2>
      <p className={styles.p}>
        This website is not intended for children under the age of 13. We do not knowingly collect
        any information from minors.
      </p>

      <h2 className={styles.h2}>5. Changes to This Policy</h2>
      <p className={styles.p}>
        We may update this Privacy Policy from time to time. Any changes will be posted on this
        page with an updated date.
      </p>

      <h2 className={`${styles.h2} ${styles.credits}`}>6. Credits</h2>
      <p className={styles.p}>
        The following icons used on this website are licensed under the Freepik/Flaticon free license, which permits personal and commercial use with attribution. If attribution for any specific author is missing or incorrect, please contact us and we will promptly address it.
      </p>

      <p className={`${styles.creditsP} ${styles.creditsP1}`}>&quot;First Tinting Image&quot; by <a href="https://www.freepik.com/author/freepik">Freepik</a></p>
      <p className={`${styles.creditsP} ${styles.creditsP2}`}>&quot;Quality Icon&quot; by <a href="https://www.flaticon.com/ru/authors/okta">Okta</a> from <a href="https://www.flaticon.com/">Flaticon</a></p>
      <p className={`${styles.creditsP} ${styles.creditsP3}`}>&quot;100 icon&quot; by <a href="https://www.flaticon.com/ru/authors/freepik">Freepik</a> from <a href="https://www.flaticon.com/">Flaticon</a></p>
      <p className={`${styles.creditsP} ${styles.creditsP4}`}>&quot;Pricing Icon&quot; by <a href="https://www.flaticon.com/ru/authors/syahrul-hidayatullah">Syahrul Hidayatullah</a> from <a href="https://www.flaticon.com/">Flaticon</a></p>
      <p className={`${styles.creditsP} ${styles.creditsP5}`}>&quot;UV Icon&quot; by <a href="https://www.flaticon.com/ru/authors/andy-horvath">Andy Horvath</a> from <a href="https://www.flaticon.com/">Flaticon</a></p>
      <p className={`${styles.creditsP} ${styles.creditsP6}`}>&quot;UV Icon&quot; by <a href="https://www.flaticon.com/ru/authors/vignesh-oviyan">Vignesh Oviyan</a> from <a href="https://www.flaticon.com/">Flaticon</a></p>
      <p className={`${styles.creditsP} ${styles.creditsP7}`}>&quot;Instagram Icon&quot; by <a href="https://www.flaticon.com/ru/authors/cobynecz">Cobynecz</a> from <a href="https://www.flaticon.com/">Flaticon</a></p>
      <p className={`${styles.creditsP} ${styles.creditsP7}`}>&quot;Customer Exeprience Icon&quot; by <a href="https://www.flaticon.com/ru/authors/prosymbols-premium">Prosymbols Premium</a> from <a href="https://www.flaticon.com/">Flaticon</a></p>

      <h2 className={styles.h2}>7. Contact</h2>
      <p className={styles.p}>
        If you have any questions or concerns about this policy, you may contact us at:{' '}
        <a className={styles.a} href="mailto:TintZone7@gmail.com">TintZone7@gmail.com</a>
      </p>
    </div>
  );
}
