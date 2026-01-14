import styles from "./Checkout.module.css";
import { useState, useEffect } from "react";

function Checkout({ onClose, onRemoveItem, cartItems, isOpen, onClearCart }) {
  // * Close overlay when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // * Handle remove item
  const handleRemoveItem = (itemIndex) => {
    onRemoveItem(itemIndex);
  };

  // * Calculate subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * (item.quantity || 1);
    }, 0);
  };

  // * Calculate tax
  const calculateTax = () => {
    return calculateSubtotal() * 0.06;
  };

  // * Tip state
  const [selectedTip, setSelectedTip] = useState(0);

  // * Calculate tip
  const calculateTipAmount = () => {
    const subtotal = calculateSubtotal();
    if (selectedTip > 0) {
      return subtotal * (selectedTip / 100);
    }
    return 0;
  };

  // * Handle tip selection
  const handleTipSelection = (tipPercentage) => {
    setSelectedTip(tipPercentage);
  };

  // * Calculate total
  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax() + calculateTipAmount();
  };

  // * Customer information state
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [orderInstructions, setOrderInstructions] = useState("");

  // * Calculate wait time
  const calculateWaitTime = () => {
    // base time
    const baseTime = 10;
    // Time per item
    const timePerItem = 5;
    const totalItems = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
    return baseTime + totalItems * timePerItem;
  };

  // * Prevent body scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // * Handle checkout
  const handleCheckout = () => {
    const orderDetails = {
      items: cartItems.map((item) => ({
        quantity: item.quantity || 1,
        name: item.name,
        price: item.price,
        selectedSauce: item.selectedSauce || "None",
        selectedMeats: item.selectedMeats || [],
        selectedSides: item.selectedSides || [],
        selectedDrink: item.selectedDrink || "None",
        selectedProtein: item.selectedProtein || "None",
        selectedDressing: item.selectedDressing || "None",
        selectedWingSauce: item.selectedWingSauce || "None",
        specialInstructions: item.specialInstructions || "None",
      })),
      subtotal: calculateSubtotal().toFixed(2),
      tipAmount: calculateTipAmount().toFixed(2),
      taxRate: "6%",
      taxAmount: calculateTax().toFixed(2),
      total: calculateTotal().toFixed(2),
      customerName: customerName || "Not provided",
      phoneNumber: phoneNumber || "Not provided",
      orderInstructions: orderInstructions || "None",
      estimatedWaitTime: calculateWaitTime(),
    };
    console.log("=== CHECKOUT ORDER DETAILS ===");
    console.log("ITEMS:");
    orderDetails.items.forEach((item, index) => {
      console.log(`${index + 1}. ${item.quantity}x ${item.name} - $${item.price.toFixed(2)}`);
      if (item.selectedSauce !== "None") console.log(`   Sauce: ${item.selectedSauce}`);
      if (item.selectedMeats.length > 0) console.log(`   Meats: ${item.selectedMeats.join(", ")}`);
      if (item.selectedSides.length > 0) console.log(`   Sides: ${item.selectedSides.join(", ")}`);
      if (item.selectedDrink !== "None") console.log(`   Drink: ${item.selectedDrink}`);
      if (item.selectedProtein !== "None") console.log(`   Protein: ${item.selectedProtein}`);
      if (item.selectedDressing !== "None") console.log(`   Dressing: ${item.selectedDressing}`);
      if (item.selectedWingSauce !== "None") console.log(`   Wing Sauce: ${item.selectedWingSauce}`);
      if (item.specialInstructions !== "None") console.log(`   Special Instructions: ${item.specialInstructions}`);
    });
    console.log(`SUBTOTAL: $${orderDetails.subtotal}`);
    console.log(
      `TIP: ${orderDetails.tipPercentage}${
        orderDetails.tipPercentage === "Custom"
          ? ` ($${orderDetails.tipAmount})`
          : orderDetails.tipPercentage !== "None"
          ? `% ($${orderDetails.tipAmount})`
          : " (None)"
      }`
    );
    console.log(`TAX (${orderDetails.taxRate}): $${orderDetails.taxAmount}`);
    console.log(`TOTAL: $${orderDetails.total}`);
    console.log(`CUSTOMER NAME: ${orderDetails.customerName}`);
    console.log(`PHONE NUMBER: ${orderDetails.phoneNumber}`);
    console.log(`ORDER INSTRUCTIONS: ${orderDetails.orderInstructions}`);
    console.log(`ESTIMATED WAIT TIME: ${orderDetails.estimatedWaitTime} minutes`);
    console.log("================================");
    // Clear the cart
    onClearCart();
    // Close the overlay
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div className={styles.overlay} onClick={handleOverlayClick}>
        {/* Checkout container */}
        <section className={styles.checkoutContainer}>
          <div className={styles.header}>
            {/* Title */}
            <h2 className={styles.title}>Order Summary</h2>
            {/* Close button */}
            <button className={styles.closeButton} onClick={onClose}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          {/* Cart items */}
          <div className={styles.cartItemsSection}>
            <h3 className={styles.sectionTitle}>Your Order</h3>
            {cartItems.length === 0 ? (
              // Empty cart message
              <p className={styles.emptyCart}>Your cart is empty</p>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className={styles.cartItem}>
                  <div className={styles.itemDetails}>
                    <div className={styles.itemHeader}>
                      {/* Item quantity */}
                      <span className={styles.itemQuantity}>{item.quantity || 1}x</span>
                      {/* Item name */}
                      <span className={styles.itemName}>{item.name}</span>
                      {/* Item price */}
                      <span className={styles.itemPrice}>${(item.price * (item.quantity || 1)).toFixed(2)}</span>
                    </div>
                    {/* Special options display */}
                    <div className={styles.specialOptions}>
                      {item.selectedSauce && <span className={styles.option}>Sauce: {item.selectedSauce}</span>}
                      {item.selectedMeats && item.selectedMeats.length > 0 && (
                        <span className={styles.option}>Meats: {item.selectedMeats.join(", ")}</span>
                      )}
                      {item.selectedSides && item.selectedSides.length > 0 && (
                        <span className={styles.option}>Sides: {item.selectedSides.join(", ")}</span>
                      )}
                      {item.selectedDrink && <span className={styles.option}>Drink: {item.selectedDrink}</span>}
                      {item.selectedProtein && <span className={styles.option}>Protein: {item.selectedProtein}</span>}
                      {item.selectedDressing && (
                        <span className={styles.option}>Dressing: {item.selectedDressing}</span>
                      )}
                      {item.selectedWingSauce && (
                        <span className={styles.option}>Wing Sauce: {item.selectedWingSauce}</span>
                      )}
                      {item.specialInstructions && (
                        <span className={styles.option}>Instructions: {item.specialInstructions}</span>
                      )}
                    </div>
                  </div>
                  {/* Remove item button */}
                  <button className={styles.removeButton} onClick={() => handleRemoveItem(index)}>
                    REMOVE
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Tip section */}
          <div className={styles.tipSection}>
            <h3 className={styles.sectionTitle}>Tip</h3>
            <div className={styles.tipOptions}>
              <button
                onClick={() => handleTipSelection(10)}
                className={`${styles.tipButton} ${selectedTip === 10 ? styles.selected : ""}`}
              >
                10%
              </button>
              <button
                onClick={() => handleTipSelection(15)}
                className={`${styles.tipButton} ${selectedTip === 15 ? styles.selected : ""}`}
              >
                15%
              </button>
              <button
                onClick={() => handleTipSelection(20)}
                className={`${styles.tipButton} ${selectedTip === 20 ? styles.selected : ""}`}
              >
                20%
              </button>
            </div>
          </div>

          {/* Cost section */}
          <div className={styles.costSection}>
            <div className={styles.costLine}>
              <span>Subtotal:</span>
              <span>${calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className={styles.costLine}>
              <span>Tax (6%):</span>
              <span>${calculateTax().toFixed(2)}</span>
            </div>
            <div className={styles.costLine}>
              <span>Tip:</span>
              <span>${calculateTipAmount().toFixed(2)}</span>
            </div>
            <div className={`${styles.costLine} ${styles.totalLine}`}>
              <span>Total:</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
          </div>

          {/* Customer information section */}
          <div className={styles.customerSection}>
            <h3 className={styles.sectionTitle}>Customer Information</h3>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Order Name *</label>
              <input
                required
                type="text"
                value={customerName}
                className={styles.input}
                placeholder="Enter here"
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Phone Number *</label>
              <input
                required
                type="tel"
                value={phoneNumber}
                className={styles.input}
                placeholder="Enter here"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Special Requests</label>
              <textarea
                rows={3}
                placeholder="Enter here"
                value={orderInstructions}
                className={styles.textarea}
                onChange={(e) => setOrderInstructions(e.target.value)}
              />
            </div>
          </div>

          {/* Wait time section */}
          <div className={styles.waitTimeSection}>
            <div className={styles.waitTimeBox}>
              <span>Your order will be ready in {calculateWaitTime()} minutes</span>
            </div>
          </div>

          {/* Checkout section */}
          <div className={styles.checkoutSection}>
            <button
              onClick={handleCheckout}
              className={styles.checkoutButton}
              disabled={cartItems.length === 0 || !customerName.trim() || !phoneNumber.trim()}
            >
              CHECKOUT
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Checkout;
