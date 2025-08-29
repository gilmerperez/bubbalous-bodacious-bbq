import { useEffect } from "react";
import styles from "./Menu.module.css";
import MenuBanner from "../../components/MenuBanner/MenuBanner";

function Menu() {
  // Set page title
  useEffect(() => {
    document.title = "Bubbalous Bodacious BBQ | Menu";
  }, []);

  return (
    <>
      {/* Party packs banner */}
      <MenuBanner />

      <main>
        <div className={styles.menuContainer}>menu</div>
      </main>
    </>
  );
}

export default Menu;
