import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
  // * Set page title
  useEffect(() => {
    document.title = "Bubbalous Bodacious BBQ | Page Not Found";
  }, []);

  return (
    <>
      <main>
        <div className={styles.pageNotFoundContainer}>
          {/* Title */}
          <h1 className={styles.pageNotFoundTitle}>PAGE NOT FOUND</h1>
          {/* Description */}
          <p className={styles.pageNotFoundDescription}>Sorry, the page you are looking for does not exist</p>
          {/* Back to home page */}
          <Link to="/" className={styles.homeButton}>
            BACK TO HOME PAGE
          </Link>
        </div>
      </main>
    </>
  );
}

export default PageNotFound;
