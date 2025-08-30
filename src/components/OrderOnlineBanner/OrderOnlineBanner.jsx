import styles from "./OrderOnlineBanner.module.css";

function OrderOnlineBanner() {
  return (
    <>
      <section className={styles.homeBannerContainer}>
        {/* Banner image */}
        <div className={styles.carouselContainer}>
          <div className={styles.carouselImage} />
        </div>

        {/* Overlay */}
        <div className={styles.overlay}></div>

        {/* Content */}
        <div className={styles.contentContainer}>
          <div className={styles.textContent}>
            <h1 className={styles.mainTitle}>BODACIOUS ONLINE ORDERING</h1>
            <p className={styles.subtitle}>
              Experience the convenience of ordering the best Orlando BBQ online with Bubbalous Bodacious BBQ. Enjoy our
              mouth-watering meats and homemade sides by placing your order online and picking it up at your
              convenience.
            </p>

            {/* Button */}
            <div className={styles.buttonContainer}>
              <a
                href="https://order.online/business/bubbalous-bodacious-barbque-61224"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
              >
                ORDER ON DOORDASH
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OrderOnlineBanner;
