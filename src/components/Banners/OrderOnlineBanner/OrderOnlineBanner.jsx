import styles from "./OrderOnlineBanner.module.css";

function OrderOnlineBanner() {
  return (
    <>
      <section className={styles.orderOnlineBannerContainer}>
        {/* Banner image */}
        <div className={styles.carouselContainer}>
          <div className={styles.carouselImage} />
        </div>
        {/* Overlay */}
        <div className={styles.overlay}></div>
        <div className={styles.contentContainer}>
          {/* Title */}
          <h1 className={styles.mainTitle}>SAME PRICES. MORE CONVENIENCE</h1>
          {/* Subtitle */}
          <p className={styles.subtitle}>
            Experience the convenience of ordering the best Orlando BBQ online with Bubbalous Bodacious BBQ. Enjoy our
            mouth-watering meats and homemade sides by placing your order online and picking it up at your convenience.
          </p>
          {/* Button */}
          <div className={styles.buttonContainer}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
              href="https://order.online/business/bubbalous-bodacious-barbque-61224"
            >
              <i className="fa-solid fa-car-side"></i>
              ORDER ON DOORDASH
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default OrderOnlineBanner;
