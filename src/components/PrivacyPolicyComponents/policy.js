import styles from "./policy.module.css";

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Privacy Policy</h1>
      <p className={styles.updated}>Last updated: June 4, 2025</p>

      <p className={styles.p}>
        This website ("we", "our", or "us") respects your privacy. We do not collect, store,
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

      <h2 className={styles.h2}>4. Children's Privacy</h2>
      <p className={styles.p}>
        This website is not intended for children under the age of 13. We do not knowingly collect
        any information from minors.
      </p>

      <h2 className={styles.h2}>5. Changes to This Policy</h2>
      <p className={styles.p}>
        We may update this Privacy Policy from time to time. Any changes will be posted on this
        page with an updated date.
      </p>

      <h2 className={styles.h2}>6. Contact</h2>
      <p className={styles.p}>
        If you have any questions or concerns about this policy, you may contact us at:{' '}
        <a className={styles.a} href="mailto:TintZone7@gmail.com">TintZone7@gmail.com</a>
      </p>
    </div>
  );
}
