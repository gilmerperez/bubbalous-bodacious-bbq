import { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import MenuBanner from "../../components/MenuBanner/MenuBanner";
import menuData from "../../data/menu.json";

function Menu() {
  // Set page title
  useEffect(() => {
    document.title = "Bubbalous Bodacious BBQ | Menu";
  }, []);

  // First category is always open
  const [expandedCategories, setExpandedCategories] = useState({
    appetizers: true,
    kidsMeals: false,
    sandwiches: false,
    sandwichBaskets: false,
    dinners: false,
    combos: false,
    byThePound: false,
    drinks: false,
    desserts: false,
    sides: false,
    bbqSauce: false,
  });

  const toggleCategory = (categoryKey) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryKey]: !prev[categoryKey],
    }));
  };

  const formatCategoryName = (key) => {
    return key
      .replace(/([A-Z])/g, " $1") // Add space before capital letters
      .replace(/^./, (str) => str.toUpperCase()) // Capitalize first letter
      .replace(/\b\w/g, (l) => l.toUpperCase()); // Capitalize first letter of each word
  };

  return (
    <>
      {/* Menu banner */}
      <MenuBanner />

      <main>
        <div className={styles.menuContainer}>
          {/* Menu content */}
          <div className={styles.menuContent}>
            {Object.entries(menuData).map(([categoryKey, categoryData]) => (
              <div key={categoryKey} className={styles.categoryContainer}>
                {/* Category header */}
                <div className={styles.categoryHeader} onClick={() => toggleCategory(categoryKey)}>
                  <div className={styles.categoryInfo}>
                    {/* Category title */}
                    <h2 className={styles.categoryTitle}>{formatCategoryName(categoryKey)}</h2>
                    {/* Category description */}
                    <div className={styles.categoryDescription}>
                      <p>{categoryData.categoryDescription}</p>
                    </div>
                  </div>
                  {/* Expand / Collapse icon */}
                  <span className={styles.toggleIcon}>{expandedCategories[categoryKey] ? "−" : "+"}</span>
                </div>

                {/* Category content */}
                {expandedCategories[categoryKey] && (
                  <div className={styles.categoryContent}>
                    {/* Menu items */}
                    <div className={styles.menuItems}>
                      {categoryData.items.map((item, index) => (
                        <div key={index} className={styles.menuItem}>
                          <div className={styles.itemHeader}>
                            {/* Item name */}
                            <h3 className={styles.itemName}>{item.name}</h3>
                            {/* Item price */}
                            <span className={styles.itemPrice}>${item.price.toFixed(2)}</span>
                          </div>
                          {/* Item description */}
                          <p className={styles.itemDescription}>{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Menu;
