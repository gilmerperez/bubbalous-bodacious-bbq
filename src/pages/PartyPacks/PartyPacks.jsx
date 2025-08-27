import { useEffect } from "react";
import styles from "./PartyPacks.module.css";
import PartyPacksBanner from "../../components/PartyPacksBanner/PartyPacksBanner";
import partyPacksData from "../../data/party-packs.json";

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
          {/* Title */}
          <h2 className={styles.pageTitle}>Bubbalou's Bodacious BBQ Party Packs</h2>

          {/* Description */}
          <p className={styles.pageDescription}>
            Perfect for any gathering! Our party packs are designed to bring the authentic taste of Bubbalou's Bodacious
            BBQ to your special events. Whether you're hosting a small family gathering or feeding the entire
            neighborhood, our party packs offer generous portions of our mouth-watering BBQ meats, homemade sides, and
            fresh bread. Each pack is carefully crafted to ensure everyone leaves satisfied and talking about your
            amazing BBQ feast for years to come.
          </p>

          {/* Party packs */}
          <section className={styles.partyPacksSection}>
            <div className={styles.partyPacksGrid}>
              {partyPacksData.map((pack) => (
                <div key={pack.id} className={styles.partyPackCard}>
                  <div className={styles.cardContent}>
                    {/* Name */}
                    <h3 className={styles.packName}>{pack.name}</h3>
                    {/* Serving size */}
                    <p className={styles.servingSize}>{pack.servingSize}</p>
                    {/* Items */}
                    <ul className={styles.itemsList}>
                      {pack.items.map((item, index) => (
                        <li key={index} className={styles.item}>
                          <span className={styles.itemName}>{item.name}</span>
                          <span className={styles.itemQuantity}>{item.quantity}</span>
                        </li>
                      ))}
                    </ul>
                    {/* Price */}
                    <div className={styles.priceContainer}>
                      <span className={styles.price}>${pack.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default PartyPacks;
