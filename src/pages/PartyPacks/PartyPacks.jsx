import { useEffect } from "react";
import styles from "./PartyPacks.module.css";

function PartyPacks() {
  // Set page title
  useEffect(() => {
    document.title = "Bubbalous Bodacious BBQ | Party Packs";
  }, []);

  return (
    <>
      <main>
        <div className={styles.partyPacksContainer}>party packs</div>
      </main>
    </>
  );
}

export default PartyPacks;
