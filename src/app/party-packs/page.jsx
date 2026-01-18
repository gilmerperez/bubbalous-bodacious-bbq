import styles from "./page.module.css";
import partyPacksData from "../../data/party-packs.json";
import PartyPacksBanner from "../../components/Banners/PartyPacksBanner/PartyPacksBanner";
import StructuredData from "../../components/StructuredData/StructuredData";

export const metadata = {
  title: "Party Packs",
  description:
    "Perfect for any gathering! Our party packs include generous portions of mouth-watering BBQ meats, homemade sides, and fresh bread. Order party packs for pick-up or delivery at Bubbalous Bodacious BBQ in Orlando, Florida.",
  keywords: [
    "party packs",
    "BBQ catering",
    "Orlando catering",
    "large group orders",
    "family style BBQ",
    "event catering",
    "pick-up orders",
  ],
  alternates: {
    canonical: "https://bubbalous-bodacious.vercel.app/party-packs",
  },
};

export default function PartyPacks() {
  const localBusinessSchema = {
    "@type": "LocalBusiness",
    name: "Bubbalous Bodacious BBQ - Party Packs",
    image: "https://bubbalous-bodacious.vercel.app/logo.jpg",
    url: "https://bubbalous-bodacious.vercel.app/party-packs",
    telephone: "(407) 295-1212",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5818 Conroy Road",
      addressLocality: "Orlando",
      addressRegion: "FL",
      postalCode: "32835",
      addressCountry: "US",
    },
    priceRange: "$$",
    servesCuisine: "Barbecue",
    description:
      "Perfect for any gathering! Our party packs include generous portions of mouth-watering BBQ meats, homemade sides, and fresh bread.",
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Party Packs",
        description: "BBQ party packs for large groups and events",
      },
    },
  };

  return (
    <>
      <StructuredData type="localBusiness" data={localBusinessSchema} />
      {/* Party packs banner */}
      <PartyPacksBanner />

      <main>
        <div className={styles.partyPacksContainer}>
          {/* Title */}
          <h1 className={styles.partyPacksTitle}>BUBBALOU&apos;S BODACIOUS PARTY PACKS</h1>
          {/* Description */}
          <p className={styles.partyPacksDescription}>
            Perfect for any gathering! Our party packs are designed to bring the authentic taste of Bubbalou&apos;s
            Bodacious BBQ to your special events. Whether you&apos;re hosting a small family gathering or feeding the
            entire neighborhood, our party packs offer generous portions of our mouth-watering BBQ meats, homemade
            sides, and fresh bread. Each pack is carefully crafted to ensure everyone leaves satisfied and talking about
            your amazing BBQ feast for years to come.
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
              <li>Party packs are for pick-up &amp; delivery only</li>
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
