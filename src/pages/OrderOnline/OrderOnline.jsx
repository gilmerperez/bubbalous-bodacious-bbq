import menuData from "../../data/menu.json";
import { useEffect, useState } from "react";
import styles from "./OrderOnline.module.css";
import OrderModal from "../../components/OrderModal/OrderModal";
import CheckoutBanner from "../../components/CheckoutBanner/CheckoutBanner";
import OrderOnlineBanner from "../../components/Banners/OrderOnlineBanner/OrderOnlineBanner";

function OrderOnline() {
  // * Set page title
  useEffect(() => {
    document.title = "Bubbalous Bodacious BBQ | Order Online";
  }, []);

  // * All categories are collapsed by default
  const [expandedCategories, setExpandedCategories] = useState({
    appetizers: false,
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

  // * Toggle category open/closed
  const toggleCategory = (categoryKey) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryKey]: !prev[categoryKey],
    }));
  };

  // * Format category name
  const formatCategoryName = (key) => {
    return key
      .replace(/([A-Z])/g, " $1") // Add space before capital letters
      .replace(/^./, (str) => str.toUpperCase()) // Capitalize first letter
      .replace(/\b\w/g, (l) => l.toUpperCase()); // Capitalize first letter of each word
  };

  // * Modal state
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // * When an item is clicked
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // * When the modal is closed
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  // * Cart state
  const [cartItems, setCartItems] = useState([]);

  // * Calculate total cart count (sum of all quantities)
  const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);

  // * When an item is added to the order
  const handleAddToOrder = (orderItem) => {
    // Update cart items
    setCartItems((prevItems) => [...prevItems, orderItem]);
    console.log("Adding to order:", orderItem);
  };

  return (
    <>
      {/* Order online banner */}
      <OrderOnlineBanner />

      {/* Checkout banner */}
      <CheckoutBanner cartCount={cartCount} />

      <main>
        <div className={styles.orderOnlineContainer}>
          {/* Title */}
          <h1 className={styles.pageTitle}>BUBBALOU'S BODACIOUS BBQ ONLINE ORDERING</h1>

          {/* Description */}
          <p className={styles.pageDescription}>
            Experience the ease and convenience of Bubbalou's Bodacious BBQ online ordering system. With just a few
            clicks, you can enjoy our mouth-watering BBQ from the comfort of your home. Whether you're planning a family
            dinner or a large gathering, our user-friendly platform allows you to customize your order to suit your
            needs. Enjoy the simplicity of online ordering and savor the authentic taste of Bubbalou's BBQ at your
            convenience.
          </p>

          {/* Menu content */}
          <div className={styles.menuContent}>
            {Object.entries(menuData).map(([categoryKey, categoryData]) => (
              <div key={categoryKey} className={styles.categoryContainer}>
                {/* Category header */}
                <div className={styles.categoryHeader} onClick={() => toggleCategory(categoryKey)}>
                  <div className={styles.categoryInfo}>
                    {/* Category title */}
                    <h2 className={styles.categoryTitle}>{formatCategoryName(categoryKey)}</h2>
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
                        <div key={index} className={styles.menuItem} onClick={() => handleItemClick(item)}>
                          <div className={styles.itemHeader}>
                            {/* Item name */}
                            <h3 className={styles.itemName}>{item.name}</h3>
                            {/* Item price */}
                            <span className={styles.itemPrice}>${item.price.toFixed(2)}</span>
                          </div>
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

      {/* Order modal */}
      <OrderModal item={selectedItem} isOpen={isModalOpen} onClose={handleCloseModal} onAddToOrder={handleAddToOrder} />
    </>
  );
}

export default OrderOnline;
