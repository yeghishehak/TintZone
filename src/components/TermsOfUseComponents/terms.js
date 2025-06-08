// app/terms/page.jsx
import styles from './terms.module.css';

export default function TermsOfUse() {
  return (
    <div className={styles.termsContainer}>
      <h1 className={styles.heading}>Terms of Use</h1>

      <section className={styles.section}>
        <h2 className={styles.subheading}>1. Acceptance of Terms</h2>
        <p className={styles.paragraph}>
          By accessing and using this website, you agree to comply with and be bound by these Terms of Use. If you do not agree to these terms, you are prohibited from using this website or any of its services.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>2. Use License</h2>
        <p className={styles.paragraph}>
          You are granted a limited, non-exclusive, non-transferable license to access and use the website for personal or internal business use only. Under this license, you may not:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>Modify, copy, or reproduce any material;</li>
          <li className={styles.listItem}>Use content for any commercial purpose without permission;</li>
          <li className={styles.listItem}>Reverse engineer or extract any code or service logic;</li>
          <li className={styles.listItem}>Attempt to impersonate the business or misrepresent affiliation;</li>
          <li className={styles.listItem}>Duplicate or reuse the design, structure, or branding of the website.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>3. Intellectual Property and Ownership</h2>
        <p className={styles.paragraph}>
          All content, branding, logo, design, layout, code, and features on this website are the sole property of Tint Zone, protected by intellectual property laws. Unauthorized use or reproduction of any part of the website is strictly prohibited.
        </p>
        <p className={styles.paragraph}>
          You may not use the business name, logo, or likeness in any way that misrepresents ownership or creates confusion with another business or service.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>4. Disclaimer</h2>
        <p className={styles.paragraph}>
          The website and its contents are provided "as is" without warranties of any kind. We do not guarantee the accuracy, reliability, or completeness of any information provided.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>5. Limitation of Liability</h2>
        <p className={styles.paragraph}>
          In no event shall Tint Zone be liable for any damages arising from the use or inability to use the website, including but not limited to direct, indirect, incidental, or consequential damages.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>6. Modifications to Terms</h2>
        <p className={styles.paragraph}>
          These Terms of Use may be updated at any time without prior notice. Continued use of the website after changes are posted constitutes your acceptance of the updated terms.
        </p>
      </section>

      <p className={styles.updatedDate}>Last updated: June 6, 2025</p>
    </div>
  );
}
