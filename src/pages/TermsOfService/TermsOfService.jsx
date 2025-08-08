import { useEffect } from "react";
import styles from "./TermsOfService.module.css";

function TermsOfService() {
  // Set page title
  useEffect(() => {
    document.title = "Bubbalous Bodacious BBQ | Terms of Service";
  }, []);

  return (
    <>
      <main>
        <div className={styles.termsOfServiceContainer}>terms of service</div>
      </main>
    </>
  );
}

export default TermsOfService;
