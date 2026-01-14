import Image from "next/image";
import styles from "./page.module.css";
import HomeBanner from "../components/Banners/HomeBanner/HomeBanner";

export const metadata = {
  title: "Home",
  description:
    "Serving Orlando's favorite BBQ since 1986. Authentic barbecue, homemade sides, and award-winning flavors. Visit us at 5818 Conroy Road, Orlando FL 32835.",
  keywords: [
    "BBQ restaurant Orlando",
    "barbecue Orlando",
    "Orlando BBQ since 1986",
    "authentic BBQ",
    "smoked meats",
    "pulled pork",
    "brisket",
    "ribs",
    "Conroy Road BBQ",
  ],
};

export default function Home() {
  return (
    <>
      {/* Home banner */}
      <HomeBanner />

      <main>
        <div className={styles.homeContainer}>
          {/* Information section */}
          <section className={styles.informationSection}>
            <div className={styles.informationContent}>
              {/* Title */}
              <h1 className={styles.informationTitle}>SERVING ORLANDO&apos;S FAVORITE BBQ SINCE 1986</h1>
              {/* Text */}
              <div className={styles.informationText}>
                <p>
                  For nearly 40 years, Bubbalou&apos;s Bodacious BBQ has been serving up Orlando&apos;s Favorite BBQ.
                </p>
                <p>
                  We use only the finest ingredients, cooking our meats low and slow over a hardwood fire and seasoning
                  them with our secret recipe. Whether you&apos;re a BBQ aficionado or just looking for a delicious
                  meal, Bubbalou&apos;s has something for everyone.
                </p>
                <p>
                  Our commitment to traditional, old-fashioned cooking means we serve BBQ straight from the pit, with
                  delicious sides and a welcoming atmosphere that makes you feel like family. Our dedication to quality
                  has earned us numerous awards and recognition from Zagat&apos;s, Southern Living, USA Today, and more.
                </p>
              </div>
            </div>
            {/* Image */}
            <div className={styles.imageContent}>
              <Image
                width={600}
                height={400}
                loading="lazy"
                src="/pigs.webp"
                alt="Little piggies"
                className={styles.pigsImage}
                style={{ width: "60%", height: "auto" }}
              />
            </div>
          </section>

          {/* Information banner */}
          <section className={styles.informationBanner}>
            <div className={styles.bannerContent}>
              {/* Telephone */}
              <div className={styles.infoItem}>
                <i className="fas fa-phone" aria-hidden="true"></i>
                <h2>PHONE</h2>
                <a href="tel:(407) 295-1212">(407) 295 - 1212</a>
              </div>
              {/* Location */}
              <div className={styles.infoItem}>
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                <h2>LOCATION</h2>
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
                <i className="fas fa-clock" aria-hidden="true"></i>
                <h2>HOURS</h2>
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
