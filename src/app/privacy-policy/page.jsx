import styles from "./page.module.css";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Bubbalous Bodacious BBQ. Learn how we handle your information and protect your privacy when visiting our website.",
  keywords: ["privacy policy", "data protection", "website privacy", "BBQ restaurant privacy"],
  alternates: {
    canonical: "https://bubbalous-bodacious.vercel.app/privacy-policy",
  },
};

export default function PrivacyPolicy() {
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
        <div className={styles.privacyPolicyContainer}>
          {/* Title */}
          <h1 className={styles.privacyPolicyTitle}>PRIVACY POLICY</h1>
          {/* Description */}
          <p className={styles.privacyPolicyDescription}>
            Your privacy matters. This privacy policy outlines how we manage your information when visiting our website.
            Please read this policy carefully to understand our practices regarding your data and how we strive to
            protect your privacy.
          </p>

          {/* Privacy policy */}
          <section className={styles.policy}>
            {/* First policy */}
            <h2 className={styles.policyHeading}>POLICY UPDATES</h2>
            <p className={styles.policyText}>
              We may revise this policy occasionally. Updates will always appear on this page. Last updated: {month}{" "}
              {year}.
            </p>
            {/* Second policy */}
            <h2 className={styles.policyHeading}>PURPOSE OF THE SITE</h2>
            <p className={styles.policyText}>
              This website serves as an informational platform for Bubbalous Bodacious BBQ. It includes details about
              our location, our menu, party packs, and catering services. No purchases or account logins are required to
              browse.
            </p>
            {/* Third policy */}
            <h2 className={styles.policyHeading}>PERSONAL INFORMATION</h2>
            <p className={styles.policyText}>
              We do not collect any personal data directly through this website. You can navigate our content without
              providing your name, email, or other personal details.
            </p>
            {/* Fourth policy */}
            <h2 className={styles.policyHeading}>COOKIES AND ANALYTICS</h2>
            <p className={styles.policyText}>
              This website does not use cookies, tracking pixels, or third-party analytics tools. We do not track your
              browsing behavior or device usage.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
