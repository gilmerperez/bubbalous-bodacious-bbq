import { useState, useEffect } from "react";
import styles from "./PartyPacksBanner.module.css";

function PartyPacksBanner() {
  // * State for current image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // * Array of images
  const images = [
    "/images/table-of-food-1.avif",
    "/images/table-of-food-2.avif",
    "/images/table-of-food-3.avif",
    "/images/table-of-food-4.avif",
    "/images/table-of-food-5.avif",
    "/images/table-of-food-6.avif",
    "/images/table-of-food-7.avif",
  ];

  // * Switch image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);
    // Clear interval on unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <section className={styles.partyPacksBannerContainer}>
        {/* Banner image carousel */}
        <div className={styles.carouselContainer}>
          {images.map((image, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${image})` }}
              className={`${styles.carouselImage} ${index === currentImageIndex ? styles.active : ""}`}
            />
          ))}
        </div>
        {/* Overlay */}
        <div className={styles.overlay}></div>
        <div className={styles.contentContainer}>
          {/* Title */}
          <h1 className={styles.mainTitle}>BODACIOUS PARTY PACKS</h1>
          {/* Subtitle */}
          <p className={styles.subtitle}>
            Perfect for any gathering! Our party packs include generous portions of mouth-watering BBQ meats, homemade
            sides, and fresh bread - from intimate family dinners to legendary feasts that will be remembered for years.
            Build your own BBQ feast with our flexible, family-style dining options.
          </p>
          {/* Button */}
          <div className={styles.buttonContainer}>
            <a href="tel:4072951212" className={styles.ctaButton}>
              <i className="fa-solid fa-phone"></i>
              ORDER FOR PICKUP
            </a>
          </div>
          {/* Carousel indicators */}
          <div className={styles.carouselIndicators}>
            {images.map((_, index) => (
              <button
                key={index}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setCurrentImageIndex(index)}
                className={`${styles.indicator} ${index === currentImageIndex ? styles.activeIndicator : ""}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default PartyPacksBanner;
