import styles from "./CheckoutBanner.module.css";

function CheckoutBanner() {
  return (
    <>
      <section className={styles.checkoutBanner}>
        <div className={styles.bannerContent}>
          {/* Restraurant location */}
          <span className={styles.locationText}>BUBBALOU'S BODACIOUS BBQ - 5818 Conroy Road, Orlando FL 32835</span>
          {/* Shopping cart button */}
          <button className={styles.cartIcon}>
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </section>
    </>
  );
}

export default CheckoutBanner;
