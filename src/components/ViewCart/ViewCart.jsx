import styles from "./ViewCart.module.css";

function ViewCart({ onCartClick, cartCount = 0, showAlert = false, alertMessage = "" }) {
  return (
    <>
      <section className={styles.viewCartContainer}>
        <div className={styles.bannerContent}>
          {/* Restraurant location */}
          <span className={styles.locationText}>Bubbalous Bodacious BBQ - 5818 Conroy Road, Orlando FL 32835</span>
          {/* Shopping cart button */}
          <div className={styles.cartContainer}>
            <button className={styles.cartIcon} onClick={onCartClick}>
              <i className="fa-solid fa-cart-shopping"></i>
              {/* Shopping cart item bubble count */}
              {cartCount > 0 && <span className={styles.cartBubble}>{cartCount}</span>}
            </button>
            {/* Dropdown cart alert */}
            {showAlert && (
              <div className={styles.dropdownAlert}>
                <div className={styles.alertContent}>{alertMessage}</div>
                <div className={styles.alertArrow}></div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default ViewCart;
