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
      <main>
        <div className={styles.homeContainer}>
          {/* Home banner */}
          <HomeBanner />

          {/* Home content */}
          <section className={styles.contentSection}>
            <div className={styles.contentWrapper}>
              {/* Text content */}
              <div className={styles.textContent}>
                <h2 className={styles.contentTitle}>ORLANDO'S FAVORITE BBQ SINCE 1986</h2>
                <div className={styles.contentText}>
                  <p>For nearly 40 years, Bubbalou's Bodacious BBQ has been serving up Orlando's Favorite BBQ.</p>
                  <p>
                    We use only the finest ingredients, cooking our meats low and slow over a hardwood fire and
                    seasoning them with our secret recipe. Whether you're a BBQ aficionado or just looking for a
                    delicious meal, Bubbalou's has something for everyone.
                  </p>
                  <p>
                    Our commitment to traditional, old-fashioned cooking means we serve BBQ straight from the pit, with
                    delicious sides and a welcoming atmosphere that makes you feel like family. Our dedication to
                    quality has earned us numerous awards and recognition from Zagat's, Southern Living, USA Today, and
                    more.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className={styles.imageContent}>
                <img src="/pigs.webp" alt="Little piggies" className={styles.pigsImage} />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Home;
