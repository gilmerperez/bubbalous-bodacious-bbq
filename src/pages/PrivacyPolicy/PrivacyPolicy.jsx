import { useEffect } from "react";
import styles from "./PrivacyPolicy.module.css";

function PrivacyPolicy() {
  // Set page title
  useEffect(() => {
    document.title = "Bubbalous Bodacious BBQ | Privacy Policy";
  }, []);

  return (
    <>
      <main>
        <div className={styles.privacyPolicyContainer}>privacy policy</div>
      </main>
    </>
  );
}

export default PrivacyPolicy;
