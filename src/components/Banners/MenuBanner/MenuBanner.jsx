"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./MenuBanner.module.css";

function MenuBanner() {
  // * State for current image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images
  const images = [
    "/images/2-meat-combo.avif",
    "/images/catfish-basket.avif",
    "/images/chicken-basket.avif",
    "/images/close-up.avif",
    "/images/gator-sandwich.avif",
    "/images/half-chicken-dinner.avif",
    "/images/pulled-pork-basket.avif",
    "/images/pulled-pork-dinner.avif",
    "/images/rib-chicken-combo.avif",
    "/images/rib-dinner.avif",
    "/images/rib-shrimp-dinner.avif",
    "/images/sausage-dinner.avif",
    "/images/shrimp-dinner.avif",
    "/images/side-of-corn.avif",
    "/images/side-of-corn-nuggets.avif",
    "/images/side-of-okra.avif",
  ];

  // Switch image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);
    // Clear interval on unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <section className={styles.menuBannerContainer}>
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
          <h1 className={styles.mainTitle}>ORLANDO&apos;S FAVORITE BBQ MENU</h1>
          {/* Subtitle */}
          <p className={styles.subtitle}>
            Our menu is a delicious mix of classic BBQ favorites and unique, mouth-watering creations. From tender
            pulled pork and succulent brisket to crispy fried catfish and savory BBQ sauces, we have something for
            everyone. Whether you&apos;re craving a classic sandwich or a hearty plate of BBQ, we&apos;ve got you covered.
          </p>
          {/* Button */}
          <div className={styles.buttonContainer}>
            <Link href="/order-online" className={styles.ctaButton}>
              <i className="fa-solid fa-laptop" aria-hidden="true"></i>
              ORDER ONLINE
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

export default MenuBanner;
