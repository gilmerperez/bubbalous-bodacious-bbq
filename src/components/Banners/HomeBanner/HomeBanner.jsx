"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./HomeBanner.module.css";

function HomeBanner() {
  // * State for current image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images
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
      <section className={styles.homeBannerContainer}>
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
          <h1 className={styles.mainTitle}>BUBBALOU&apos;S BODACIOUS BBQ</h1>
          {/* Subtitle */}
          <p className={styles.subtitle}>
            Looking for the best Orlando BBQ? Look no further than Bubbalous Bodacious BBQ! Our mouth-watering meats and
            homemade sides will have you coming back for more.
          </p>
          {/* Buttons */}
          <div className={styles.buttonContainer}>
            <Link href="/menu" className={styles.ctaButton}>
              VIEW FULL MENU
            </Link>
            <Link href="/party-packs" className={`${styles.ctaButton} ${styles.secondaryButton}`}>
              VIEW PARTY PACKS
            </Link>
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

export default HomeBanner;
