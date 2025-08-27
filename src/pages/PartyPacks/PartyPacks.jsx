import { useEffect } from "react";
import styles from "./PartyPacks.module.css";
import PartyPacksBanner from "../../components/PartyPacksBanner/PartyPacksBanner";

function PartyPacks() {
  // Set page title
  useEffect(() => {
    document.title = "Bubbalous Bodacious BBQ | Party Packs";
  }, []);

  return (
    <>
      {/* Home banner */}
      <PartyPacksBanner />

      <main>
        <div className={styles.partyPacksContainer}>party packs</div>
      </main>
    </>
  );
}

export default PartyPacks;
