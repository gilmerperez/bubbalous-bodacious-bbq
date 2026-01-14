import styles from "./page.module.css";

export const metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Bubbalous Bodacious BBQ. Read our terms and conditions that govern your use of our website and services.",
  keywords: ["terms of service", "terms and conditions", "website terms", "BBQ restaurant terms"],
};

export default function TermsOfService() {
  // * Month names array
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // * Get current year and month
  const now = new Date();
  const year = now.getFullYear();
  const month = monthNames[now.getMonth()];

  return (
    <>
      <main>
        <div className={styles.termsOfServiceContainer}>
          {/* Title */}
          <h1 className={styles.termsOfServiceTitle}>TERMS OF SERVICE</h1>
          {/* Description */}
          <p className={styles.termsOfServiceDescription}>
            By accessing this website, you agree to comply with the following terms and conditions. It is important to
            thoroughly read and understand these terms as they govern your use of our services and website. If you do
            not agree with any part of these terms, please refrain from using our website.
          </p>

          {/* Terms of service */}
          <section className={styles.terms}>
            {/* First term */}
            <h2 className={styles.termsHeading}>SITE USAGE</h2>
            <p className={styles.termsText}>
              This website serves as an informational platform for Bubbalous Bodacious BBQ. All content is subject to
              change without notice. Unauthorized use of this site may give rise to a claim for damages.
            </p>
            {/* Second term */}
            <h2 className={styles.termsHeading}>NO LIABILITY</h2>
            <p className={styles.termsText}>
              We are not responsible for any loss or damage that may occur from using this website. All information is
              provided &quot;as is&quot; without any warranties of any kind.
            </p>
            {/* Third term */}
            <h2 className={styles.termsHeading}>MODIFICATIONS</h2>
            <p className={styles.termsText}>
              We may revise these terms at any time. By using this website, you agree to be bound by the current version
              of these terms. Last updated: {month} {year}.
            </p>
            {/* Fourth term */}
            <h2 className={styles.termsHeading}>MENU AND SERVICE DISCLAIMER</h2>
            <p className={styles.termsText}>
              Our menu items and service offerings are subject to change without prior notice. While we strive to keep
              all information up-to-date, availability and offerings may vary. Please contact our team directly for the
              most current details.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
