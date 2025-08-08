import { useEffect } from "react";
import styles from "./Contact.module.css";

function Contact() {
  // Set page title
  useEffect(() => {
    document.title = "Bubbalous Bodacious BBQ | Contact";
  }, []);

  return (
    <>
      <main>
        <div className={styles.contactContainer}>contact</div>
      </main>
    </>
  );
}

export default Contact;
