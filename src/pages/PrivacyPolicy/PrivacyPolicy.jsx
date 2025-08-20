import { useEffect } from "react";
import styles from "./PrivacyPolicy.module.css";

function PrivacyPolicy() {
  // Set page title
  useEffect(() => {
    document.title = "Bubbalous Bodacious BBQ | Privacy Policy";
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
        <section className={styles.privacyPolicyContainer}>
          {/* Heading */}
          <h1 className={styles.heading}>PRIVACY POLICY</h1>

          <div className={styles.policy}>
            {/* Introduction */}
            <p className={styles.introduction}>
              Your privacy matters. This privacy policy outlines how we manage your information when visiting our
              website. Please read this policy carefully to understand our practices regarding your data and how we
              strive to protect your privacy.
            </p>

            {/* Policy updates */}
            <p className={styles.policyHeading}>POLICY UPDATES</p>
            <p className={styles.policyText}>
              We may revise this policy occasionally. Updates will always appear on this page. Last updated: {month}{" "}
              {year}.
            </p>

            {/* Purpose of the site */}
            <p className={styles.policyHeading}>PURPOSE OF THE SITE</p>
            <p className={styles.policyText}>
              This website serves as an informational platform for Bubbalous Bodacious BBQ. It includes details about
              our location, our menu, party packs, and catering services. No purchases or account logins are required to
              browse.
            </p>

            {/* Personal information */}
            <p className={styles.policyHeading}>PERSONAL INFORMATION</p>
            <p className={styles.policyText}>
              We do not collect any personal data directly through this website. You can navigate our content without
              providing your name, email, or other personal details.
            </p>

            {/* Cookies and analytics */}
            <p className={styles.policyHeading}>COOKIES AND ANALYTICS</p>
            <p className={styles.policyText}>
              This website does not use cookies, tracking pixels, or third-party analytics tools. We do not track your
              browsing behavior or device usage.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default PrivacyPolicy;
