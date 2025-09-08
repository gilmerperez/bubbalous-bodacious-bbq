import styles from "./CheckoutBanner.module.css";

function CheckoutBanner({ cartCount = 0 }) {
  return (
    <>
      <section className={styles.checkoutBanner}>
        <div className={styles.bannerContent}>
          {/* Restraurant location */}
          <span className={styles.locationText}>BUBBALOU'S BODACIOUS BBQ - 5818 Conroy Road, Orlando FL 32835</span>
          {/* Shopping cart button */}
          <button className={styles.cartIcon}>
            <i className="fa-solid fa-cart-shopping"></i>
            {/* Shopping cart item bubble count */}
            {cartCount > 0 && <span className={styles.cartBubble}>{cartCount}</span>}
          </button>
        </div>
      </section>
    </>
  );
}

export default CheckoutBanner;
