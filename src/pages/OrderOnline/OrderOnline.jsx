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
        <div className={styles.orderOnlineContainer}>order online</div>
      </main>
    </>
  );
}

export default OrderOnline;
