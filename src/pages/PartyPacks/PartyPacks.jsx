import { useEffect } from "react";
import styles from "./PartyPacks.module.css";
import partyPacksData from "../../data/party-packs.json";
import PartyPacksBanner from "../../components/Banners/PartyPacksBanner/PartyPacksBanner";

function PartyPacks() {
  // * Set page title
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
          <h1 className={styles.partyPacksTitle}>BUBBALOU'S BODACIOUS PARTY PACKS</h1>
          {/* Description */}
          <p className={styles.partyPacksDescription}>
            Perfect for any gathering! Our party packs are designed to bring the authentic taste of Bubbalou's Bodacious
            BBQ to your special events. Whether you're hosting a small family gathering or feeding the entire
            neighborhood, our party packs offer generous portions of our mouth-watering BBQ meats, homemade sides, and
            fresh bread. Each pack is carefully crafted to ensure everyone leaves satisfied and talking about your
            amazing BBQ feast for years to come.
          </p>

          {/* Party packs */}
          <section className={styles.partyPacks}>
            {partyPacksData.map((pack) => (
              // Party pack card
              <div key={pack.id} className={styles.partyPackCard}>
                <div className={styles.cardContent}>
                  {/* Name */}
                  <h3 className={styles.packName}>{pack.name}</h3>
                  {/* Serving size */}
                  <p className={styles.servingSize}>{pack.servingSize}</p>
                  {/* List of items */}
                  <ul className={styles.itemsList}>
                    {pack.items.map((item, index) => (
                      <li key={index} className={styles.item}>
                        {/* Item name */}
                        <span className={styles.itemName}>{item.name}</span>
                        {/* Dotted line */}
                        <span className={styles.line}></span>
                        {/* Item quantity */}
                        <span className={styles.itemQuantity}>{item.quantity}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Price */}
                  <div>
                    <span className={styles.price}>${pack.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Additional info */}
          <section className={styles.additionalInfo}>
            {/* Title */}
            <h2 className={styles.additionalInfoTitle}>ADDITIONAL INFO</h2>
            {/* List of additional info */}
            <ul className={styles.additionalInfoList}>
              <li>Party packs are for pick-up & delivery only</li>
              <li>Delivery is available for an additional charge</li>
              <li>Serving utensils will be an additional charge of $1.50 each</li>
              <li>
                Substitutions may be made with any of our other popular sides:
                <br />
                Potato Salad, Niblet Corn, Green Beans, Texas Caviar, Tossed Salad, Collard Greens, Black-Eyed Peas
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}

export default PartyPacks;
