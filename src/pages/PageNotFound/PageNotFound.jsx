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
          {/* Heading */}
          <h1 className={styles.heading}>PAGE NOT FOUND</h1>

          {/* Introduction */}
          <p className={styles.introduction}>Sorry, the page you are looking for does not exist</p>

          {/* Go back to home page link */}
          <Link to="/" className={styles.homeLink}>
            BACK TO HOME PAGE
          </Link>
        </div>
      </main>
    </>
  );
}

export default PageNotFound;
