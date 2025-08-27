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
      {/* Party packs banner */}
      <PartyPacksBanner />

      <main>
        <div className={styles.partyPacksContainer}>
          <h2 className={styles.pageTitle}>Bubbalou's Bodacious BBQ Party Packs</h2>
          <p className={styles.pageDescription}>
            Perfect for any gathering! Our party packs are designed to bring the authentic taste of Bubbalou's Bodacious
            BBQ to your special events. Whether you're hosting a small family gathering or feeding the entire
            neighborhood, our party packs offer generous portions of our mouth-watering BBQ meats, homemade sides, and
            fresh bread. Each pack is carefully crafted to ensure everyone leaves satisfied and talking about your
            amazing BBQ feast for years to come.
          </p>
        </div>
      </main>
    </>
  );
}

export default PartyPacks;
