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
        <div className={styles.homeContainer}>
          {/* Information section */}
          <section className={styles.infoSection}>
            {/* Text */}
            <div className={styles.textContent}>
              <h2 className={styles.contentTitle}>SERVING ORLANDO'S FAVORITE BBQ SINCE 1986</h2>
              <div className={styles.contentText}>
                <p>For nearly 40 years, Bubbalou's Bodacious BBQ has been serving up Orlando's Favorite BBQ.</p>
                <p>
                  We use only the finest ingredients, cooking our meats low and slow over a hardwood fire and seasoning
                  them with our secret recipe. Whether you're a BBQ aficionado or just looking for a delicious meal,
                  Bubbalou's has something for everyone.
                </p>
                <p>
                  Our commitment to traditional, old-fashioned cooking means we serve BBQ straight from the pit, with
                  delicious sides and a welcoming atmosphere that makes you feel like family. Our dedication to quality
                  has earned us numerous awards and recognition from Zagat's, Southern Living, USA Today, and more.
                </p>
              </div>
            </div>
            {/* Image */}
            <div className={styles.imageContent}>
              <img src="/pigs.webp" alt="Little piggies" className={styles.pigsImage} />
            </div>
          </section>

          {/* Information banner */}
          <section className={styles.informationBanner}>
            <div className={styles.bannerContent}>
              {/* Telephone */}
              <div className={styles.infoItem}>
                <i className="fas fa-phone"></i>
                <h3>TELEPHONE</h3>
                <a href="tel:(407) 295-1212">(407) 295 - 1212</a>
              </div>
              {/* Location */}
              <div className={styles.infoItem}>
                <i className="fas fa-map-marker-alt"></i>
                <h3>LOCATION</h3>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps?sca_esv=e5cef3e958d363d7&rlz=1C1RXQR_enUS1087US1087&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiHmJ1YmJhbG91cyBib2RhY2lvdXMgYmJxIGNvbnJveTICECYyCBAAGIAEGKIEMggQABiiBBiJBTIIEAAYgAQYogQyCBAAGIAEGKIEMgUQABjvBUjlDVDjBli-DHACeAGQAQCYAa8CoAH3B6oBBzAuMy4xLjG4AQPIAQD4AQGYAgegAo0IwgIKEAAYsAMY1gQYR8ICDRAAGLADGNYEGEcYyQPCAg4QABiABBiwAxiSAxiKBcICCBAAGBYYChgewgIGEAAYFhgemAMA4gMEGAAgWuIDBBgAIFviAwQYACBciAYBkAYJkgcHMi4zLjEuMaAHqiSyBwcwLjMuMS4xuAeDCMIHBTAuNi4xyAcS&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KQekdArSfueIMd2HaKpG8rfY&daddr=5818+Conroy+Rd,+Orlando,+FL+32835"
                >
                  5818 Conroy Road, Orlando FL 32835
                </a>
              </div>
              {/* Hours */}
              <div className={styles.infoItem}>
                <i className="fas fa-clock"></i>
                <h3>HOURS</h3>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/search?sca_esv=e5cef3e958d363d7&rlz=1C1RXQR_enUS1087US1087&q=bubbalou%27s+bodacious+bbq+conroy&spell=1&sa=X&ved=2ahUKEwj5l7mY7aaPAxUlTDABHbYuJD0QBSgAegQIFxAB&biw=1745&bih=828&dpr=1.1"
                >
                  10 AM - 9 PM
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Home;
