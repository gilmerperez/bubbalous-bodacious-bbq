import { useEffect } from "react";
import styles from "./TermsOfService.module.css";

function TermsOfService() {
  // Set page title
  useEffect(() => {
    document.title = "Bubbalous Bodacious BBQ | Terms of Service";
  }, []);

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

  const now = new Date();
  const year = now.getFullYear();
  const month = monthNames[now.getMonth()];

  return (
    <>
      <main>
        <section className={styles.termsOfServiceContainer}>
          {/* Heading */}
          <h1 className={styles.heading}>TERMS OF SERVICE</h1>

          <section className={styles.terms}>
            {/* Introduction */}
            <p className={styles.introduction}>
              By accessing this website, you agree to comply with the following terms and conditions. Please read these
              terms carefully before using our services.
            </p>

            {/* Site usage */}
            <p className={styles.termsHeading}>SITE USAGE</p>
            <p className={styles.termsText}>
              This website serves as an informational platform for Bubbalous Bodacious BBQ. All content is subject to
              change without notice. Unauthorized use of this site may give rise to a claim for damages.
            </p>

            {/* No liability */}
            <p className={styles.termsHeading}>NO LIABILITY</p>
            <p className={styles.termsText}>
              We are not responsible for any loss or damage that may occur from using this website. All information is
              provided “as is,” without any warranties of any kind.
            </p>

            {/* Modifications */}
            <p className={styles.termsHeading}>MODIFICATIONS</p>
            <p className={styles.termsText}>
              We may revise these terms at any time. By using this website, you agree to be bound by the current version
              of these terms. Last updated: {month} {year}.
            </p>

            {/* Menu and service disclaimer */}
            <p className={styles.termsHeading}>MENU AND SERVICE DISCLAIMER</p>
            <p className={styles.termsText}>
              Our menu items and service offerings are subject to change without prior notice. While we strive to keep
              all information up-to-date, availability and offerings may vary. Please contact our team directly for the
              most current details.
            </p>
          </section>
        </section>
      </main>
    </>
  );
}

export default TermsOfService;
