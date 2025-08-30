import { useEffect } from "react";
import styles from "./OrderOnline.module.css";
import OrderOnlineBanner from "../../components/OrderOnlineBanner/OrderOnlineBanner";

function OrderOnline() {
  // Set page title
  useEffect(() => {
    document.title = "Bubbalous Bodacious BBQ | Order Online";
  }, []);

  return (
    <>
      {/* Order online banner */}
      <OrderOnlineBanner />

      <main>
        <div className={styles.orderOnlineContainer}>
          {/* Title */}
          <h1 className={styles.pageTitle}>BUBBALOU'S BODACIOUS BBQ ORDER ONLINE</h1>

          {/* Description */}
          <p className={styles.pageDescription}>
            Experience the ease and convenience of Bubbalou's Bodacious BBQ online ordering system. With just a few
            clicks, you can enjoy our mouth-watering BBQ from the comfort of your home. Whether you're planning a family
            dinner or a large gathering, our user-friendly platform allows you to customize your order to suit your
            needs. Enjoy the simplicity of online ordering and savor the authentic taste of Bubbalou's BBQ at your
            convenience.
          </p>
        </div>
      </main>
    </>
  );
}

export default OrderOnline;
