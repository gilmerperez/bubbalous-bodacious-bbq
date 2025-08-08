import { useEffect } from "react";
import styles from "./Menu.module.css";

function Menu() {
  // Set page title
  useEffect(() => {
    document.title = "Bubbalous Bodacious BBQ | Menu";
  }, []);

  return (
    <>
      <main>
        <div className={styles.menuContainer}>menu</div>
      </main>
    </>
  );
}

export default Menu;
