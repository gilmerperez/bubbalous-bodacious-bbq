"use client";
import styles from "./page.module.css";
import menuData from "../../data/menu.json";
import { useState, useEffect } from "react";
import ViewCart from "../../components/ViewCart/ViewCart";
import Checkout from "../../components/Checkout/Checkout";
import OrderModal from "../../components/OrderModal/OrderModal";
import OrderOnlineBanner from "../../components/Banners/OrderOnlineBanner/OrderOnlineBanner";
import StructuredData from "../../components/StructuredData/StructuredData";

export default function OrderOnline() {
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
  const [cartItems, setCartItems] = useState(() => {
    // Load cart items from localStorage on component mount
    if (typeof window !== "undefined") {
      try {
        const savedCartItems = localStorage.getItem("bubbalousCartItems");
        return savedCartItems ? JSON.parse(savedCartItems) : [];
      } catch (error) {
        console.error("Error loading cart items from localStorage:", error);
        return [];
      }
    }
    return [];
  });

  // * Cart alert state
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  // * Calculate total cart count (sum of all quantities)
  const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);

  // * Save cart items to localStorage whenever cart changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("bubbalousCartItems", JSON.stringify(cartItems));
      } catch (error) {
        console.error("Error saving cart items to localStorage:", error);
      }
    }
  }, [cartItems]);

  // * When an item is added to the order
  const handleAddToOrder = (orderItem) => {
    // Update cart items
    setCartItems((prevItems) => [...prevItems, orderItem]);
    // Show cart alert
    const quantity = orderItem.quantity || 1;
    const itemName = orderItem.name || "Item";
    setAlertMessage(`${quantity} ${itemName} added to cart!`);
    setShowAlert(true);
    // Hide alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  // * Checkout overlay state
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // * Handle opening checkout overlay
  const handleOpenCheckout = () => {
    if (cartItems.length > 0) {
      setIsCheckoutOpen(true);
    }
  };

  // * Handle closing checkout overlay
  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  // * Handle removing item from cart
  const handleRemoveItem = (itemIndex) => {
    setCartItems((prevItems) => prevItems.filter((_, index) => index !== itemIndex));
  };

  // * Handle clearing entire cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    name: "Bubbalous Bodacious BBQ - Online Ordering",
    image: "https://bubbalous-bodacious.vercel.app/logo.jpg",
    url: "https://bubbalous-bodacious.vercel.app/order-online",
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
      "Experience the ease and convenience of Bubbalou's Bodacious BBQ online ordering system. Order our mouth-watering BBQ for pick-up or delivery.",
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Online Food Ordering",
        description: "Order BBQ online for pick-up or delivery",
      },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceType: "Online Ordering",
      },
    },
  };

  return (
    <>
      <StructuredData type="localBusiness" data={localBusinessSchema} />
      {/* Order online banner */}
      <OrderOnlineBanner />

      {/* Checkout banner */}
      <ViewCart
        cartCount={cartCount}
        showAlert={showAlert}
        alertMessage={alertMessage}
        onCartClick={handleOpenCheckout}
      />

      <main>
        <div className={styles.orderOnlineContainer}>
          {/* Title */}
          <h1 className={styles.orderOnlineTitle}>BUBBALOU&apos;S BODACIOUS ONLINE ORDERING</h1>
          {/* Description */}
          <p className={styles.orderOnlineDescription}>
            Experience the ease and convenience of Bubbalou&apos;s Bodacious BBQ online ordering system. With just a few
            clicks, you can enjoy our mouth-watering BBQ from the comfort of your home. Whether you&apos;re planning a
            family dinner or a large gathering, our user-friendly platform allows you to customize your order to suit
            your needs. Enjoy the simplicity of online ordering and savor the authentic taste of Bubbalou&apos;s BBQ at
            your convenience.
          </p>

          {/* Menu content */}
          <section className={styles.menuContent}>
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
          </section>
        </div>
      </main>

      {/* Order modal */}
      <OrderModal item={selectedItem} isOpen={isModalOpen} onClose={handleCloseModal} onAddToOrder={handleAddToOrder} />

      {/* Checkout overlay */}
      <Checkout
        cartItems={cartItems}
        isOpen={isCheckoutOpen}
        onUpdateCart={setCartItems}
        onClose={handleCloseCheckout}
        onClearCart={handleClearCart}
        onRemoveItem={handleRemoveItem}
      />
    </>
  );
}
