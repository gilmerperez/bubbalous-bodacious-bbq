import { useEffect } from "react";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
  // Set page title
  useEffect(() => {
    document.title = "Bubbalous Bodacious BBQ | Page Not Found";
  }, []);

  return (
    <>
      <main>
        <div className={styles.pageNotFoundContainer}>page not found</div>
      </main>
    </>
  );
}

export default PageNotFound;
