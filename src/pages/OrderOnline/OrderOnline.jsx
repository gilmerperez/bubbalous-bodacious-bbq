import { useEffect } from "react";
import styles from "./OrderOnline.module.css";

function OrderOnline() {
  // Set page title
  useEffect(() => {
    document.title = "Bubbalous Bodacious BBQ | Order Online";
  }, []);

  return (
    <>
      <main>
        <div className={styles.orderOnlineContainer}>order online</div>
      </main>
    </>
  );
}

export default OrderOnline;
