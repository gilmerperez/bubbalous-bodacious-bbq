import { useState } from "react";
import styles from "./OrderModal.module.css";

function OrderModal({ item, isOpen, onClose, onAddToOrder }) {
  // Meal options states
  const [quantity, setQuantity] = useState(1);
  const [selectedSauce, setSelectedSauce] = useState("");
  const [selectedMeats, setSelectedMeats] = useState([]);
  const [specialInstructions, setSpecialInstructions] = useState("");

  if (!isOpen || !item) return null;

  // Handle quantity change
  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  // Handle meat selection (supports both single and 2 meat combo selection)
  const handleMeatSelection = (meatName) => {
    const isTwoMeatCombo = item.name === "Any 2 Meat Combo";

    if (isTwoMeatCombo) {
      // For 2 meat combo, allow max of 2 selections
      setSelectedMeats((prev) => {
        if (prev.includes(meatName)) {
          // Remove if already selected
          return prev.filter((meat) => meat !== meatName);
        } else if (prev.length < 2) {
          // Add if less than 2 selected
          return [...prev, meatName];
        }
        // Don't add if already 2 selected
        return prev;
      });
    } else {
      // For single meat selection, replace the array with one item
      setSelectedMeats([meatName]);
    }
  };

  // Handle add to order
  const handleAddToOrder = () => {
    onAddToOrder({
      ...item,
      quantity,
      selectedSauce,
      selectedMeats,
      specialInstructions,
    });
    onClose();
    // Reset form
    setQuantity(1);
    setSelectedSauce("");
    setSelectedMeats([]);
    setSpecialInstructions("");
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

          {/* Sauce options */}
          {item.sauceOptions && (
            <div className={styles.sauceOptionsSection}>
              <h3 className={styles.sauceOptionsTitle}>BBQ Sauce:</h3>
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

          {/* Meat options */}
          {item.meatOptions && (
            <div className={styles.meatOptionsSection}>
              <h3 className={styles.meatOptionsTitle}>
                {item.name === "Any 2 Meat Combo" ? "Choose 2 Meats:" : "Meat Choice:"}
              </h3>
              {item.name === "Any 2 Meat Combo" && (
                <p className={styles.selectionHelper}>Select up to 2 meats ({selectedMeats.length}/2 selected)</p>
              )}
              <div className={styles.meatOptionsList}>
                {item.meatOptions.map((meat, index) => (
                  <label key={index} className={styles.meatOption}>
                    <input
                      name="meat"
                      value={meat.name}
                      className={styles.meatRadio}
                      checked={selectedMeats.includes(meat.name)}
                      onChange={() => handleMeatSelection(meat.name)}
                      type={item.name === "Any 2 Meat Combo" ? "checkbox" : "radio"}
                    />
                    <span className={styles.meatLabel}>{meat.name}</span>
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
