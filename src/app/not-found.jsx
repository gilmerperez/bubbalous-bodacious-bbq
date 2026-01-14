import Link from "next/link";
import styles from "./not-found.module.css";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist. Return to Bubbalous Bodacious BBQ home page.",
};

export default function NotFound() {
  return (
    <>
      <main>
        <div className={styles.pageNotFoundContainer}>
          {/* Title */}
          <h1 className={styles.pageNotFoundTitle}>PAGE NOT FOUND</h1>
          {/* Description */}
          <p className={styles.pageNotFoundDescription}>Sorry, the page you are looking for does not exist</p>
          {/* Back to home page */}
          <Link href="/" className={styles.homeButton}>
            BACK TO HOME PAGE
          </Link>
        </div>
      </main>
    </>
  );
}
