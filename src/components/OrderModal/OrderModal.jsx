import { useState } from "react";
import styles from "./OrderModal.module.css";

function OrderModal({ item, isOpen, onClose, onAddToOrder }) {
  // Meal options states
  const [quantity, setQuantity] = useState(1);
  const [selectedSauce, setSelectedSauce] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");

  if (!isOpen || !item) return null;

  // Handle quantity change
  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  // Handle add to order
  const handleAddToOrder = () => {
    onAddToOrder({
      ...item,
      quantity,
      specialInstructions,
      selectedSauce,
    });
    onClose();
    // Reset form
    setQuantity(1);
    setSpecialInstructions("");
    setSelectedSauce("");
  };

  // Calculate total price
  const totalPrice = (item.price * quantity).toFixed(2);

  return (
    <>
      <div className={styles.modalOverlay} onClick={onClose}>
        {/* Modal */}
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          {/* Modal header */}
          <div className={styles.modalHeader}>
            {/* Item name */}
            <h2 className={styles.itemName}>{item.name}</h2>
            {/* Close button */}
            <button className={styles.closeButton} onClick={onClose}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          {/* Separator line */}
          <hr className={styles.separator} />

          {/* Item Description */}
          <div className={styles.descriptionSection}>
            <p className={styles.itemDescription}>{item.description}</p>
          </div>

          {/* Quantity selector */}
          <div className={styles.quantitySection}>
            <label className={styles.quantityLabel}>Quantity:</label>
            <div className={styles.quantityControls}>
              <button
                disabled={quantity <= 1}
                className={styles.quantityButton}
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button>
              <span className={styles.quantityDisplay}>{quantity}</span>
              <button
                disabled={quantity > 99}
                className={styles.quantityButton}
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Sauce Options */}
          {item.sauceOptions && (
            <div className={styles.sauceOptionsSection}>
              <h3 className={styles.sauceOptionsTitle}>BBQ Sauce</h3>
              <div className={styles.sauceOptionsList}>
                {item.sauceOptions.map((sauce, index) => (
                  <label key={index} className={styles.sauceOption}>
                    <input
                      type="radio"
                      name="sauce"
                      value={sauce.name}
                      className={styles.sauceRadio}
                      checked={selectedSauce === sauce.name}
                      onChange={(e) => setSelectedSauce(e.target.value)}
                    />
                    <span className={styles.sauceLabel}>{sauce.name}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Special instructions */}
          <div className={styles.specialInstructionsSection}>
            <label className={styles.specialInstructionsLabel}>Special Instructions:</label>
            <textarea
              rows={3}
              value={specialInstructions}
              placeholder="Write your instruction here..."
              className={styles.specialInstructionsInput}
              onChange={(e) => setSpecialInstructions(e.target.value)}
            />
          </div>

          {/* Legal section */}
          <div className={styles.legalSection}>
            <p className={styles.allergyWarning}>
              <strong>FOOD ALLERGY WARNING:</strong>
              <br />
              Our food may contain food allergens including, but not limited to: Dairy Products, Peanuts & other nuts,
              Soy, Wheat, Glutens, Coconut. If any questions, please speak to manager.
            </p>
            <p className={styles.legalText}>* Not all requests can be accommodated.</p>
          </div>

          {/* Separator line */}
          <hr className={styles.separator} />

          {/* Add to order button */}
          <div className={styles.actionSection}>
            <button className={styles.addToOrderButton} onClick={handleAddToOrder}>
              ADD TO ORDER ${totalPrice}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderModal;
