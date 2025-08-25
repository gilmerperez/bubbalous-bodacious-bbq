import { useEffect } from "react";
import styles from "./Home.module.css";
import HomeBanner from "../../components/HomeBanner/HomeBanner";

function Home() {
  // Set page title
  useEffect(() => {
    document.title = "Bubbalous Bodacious BBQ | Home";
  }, []);

  return (
    <>
      {/* Home banner */}
      <HomeBanner />

      <main>
        <div className={styles.homeContainer}></div>
      </main>
    </>
  );
}

export default Home;
