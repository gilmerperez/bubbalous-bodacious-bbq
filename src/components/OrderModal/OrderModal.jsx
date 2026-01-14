"use client";
import { useState } from "react";
import styles from "./OrderModal.module.css";

function OrderModal({ isOpen, item, onAddToOrder, onClose }) {
  // * Meal options states
  const [quantity, setQuantity] = useState(1);
  const [selectedSauce, setSelectedSauce] = useState("");
  const [selectedMeats, setSelectedMeats] = useState([]);
  const [selectedSides, setSelectedSides] = useState([]);
  const [selectedDrink, setSelectedDrink] = useState("");
  const [selectedProtein, setSelectedProtein] = useState("");
  const [selectedDressing, setSelectedDressing] = useState("");
  const [selectedWingSauce, setSelectedWingSauce] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");

  // * Check if modal is open and item is loaded
  if (!isOpen || !item) return null;

  // * Handle quantity change
  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  // * Handle meat selection (supports both single and 2 meat combo selection)
  const handleMeatSelection = (meatName) => {
    // Check if item is a 2 meat combo
    const isTwoMeatCombo = item.name === "Any 2 Meat Combo";
    // If item is a 2 meat combo, allow up to 2 meats to be selected
    if (isTwoMeatCombo) {
      setSelectedMeats((prev) => {
        if (prev.includes(meatName)) {
          // Remove if already selected
          return prev.filter((meat) => meat !== meatName);
        } else if (prev.length < 2) {
          // Add if less than 2 selected
          return [...prev, meatName];
        }
        // Don&apos;t add if already 2 selected
        return prev;
      });
    } else {
      // For single meat selection, replace the array with one item
      setSelectedMeats([meatName]);
    }
  };

  // * Handle side selection (supports both single and veggie plate selection)
  const handleSideSelection = (sideName) => {
    // Check if item is a veggie plate
    const isVeggiePlate = item.name === "Veggie Plate - Any 4 Vegetables";
    // If item is a veggie plate, allow up to 4 sides to be selected
    if (isVeggiePlate) {
      setSelectedSides((prev) => {
        if (prev.includes(sideName)) {
          // Remove if already selected
          return prev.filter((side) => side !== sideName);
        } else if (prev.length < 4) {
          // Add if less than 4 selected
          return [...prev, sideName];
        }
        // Don&apos;t add if already 4 selected
        return prev;
      });
    } else {
      // For single side selection, replace the array with one item
      setSelectedSides([sideName]);
    }
  };

  // * Handle drink selection
  const handleDrinkSelection = (drinkName) => {
    setSelectedDrink(drinkName);
  };

  // * Handle protein selection
  const handleProteinSelection = (proteinName) => {
    setSelectedProtein(proteinName);
  };

  // * Handle dressing selection
  const handleDressingSelection = (dressingName) => {
    setSelectedDressing(dressingName);
  };

  // * Handle wing sauce selection
  const handleWingSauceSelection = (wingSauceName) => {
    setSelectedWingSauce(wingSauceName);
  };

  // * Handle add to order
  const handleAddToOrder = () => {
    onAddToOrder({
      ...item,
      quantity,
      selectedSauce,
      selectedMeats,
      selectedSides,
      selectedDrink,
      selectedProtein,
      selectedDressing,
      selectedWingSauce,
      specialInstructions,
    });
    onClose();
    // Reset form
    setQuantity(1);
    setSelectedSauce("");
    setSelectedMeats([]);
    setSelectedSides([]);
    setSelectedDrink("");
    setSelectedProtein("");
    setSelectedDressing("");
    setSelectedWingSauce("");
    setSpecialInstructions("");
  };

  // * Calculate total price
  const totalPrice = (item.price * quantity).toFixed(2);

  return (
    <>
      <section className={styles.modalOverlay} onClick={onClose}>
        {/* Modal */}
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <div className={styles.modalHeader}>
            {/* Item name */}
            <h2 className={styles.itemName}>{item.name}</h2>
            {/* Close button */}
            <button className={styles.closeButton} onClick={onClose}>
              <i className="fa-solid fa-xmark" aria-hidden="true"></i>
            </button>
          </div>

          {/* Separator */}
          <hr className={styles.separator} />

          {/* Item description */}
          <div className={styles.descriptionSection}>
            <p className={styles.itemDescription}>{item.description}</p>
          </div>

          {/* Quantity selector */}
          <div className={styles.quantitySection}>
            <h3 className={styles.quantityTitle}>Quantity:</h3>
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

          {/* Side options */}
          {item.sideOptions && (
            <div className={styles.sideOptionsSection}>
              <h3 className={styles.sideOptionsTitle}>
                {item.name === "Veggie Plate - Any 4 Vegetables" ? "Choose 4 Vegetables:" : "Side Choice:"}
              </h3>
              {item.name === "Veggie Plate - Any 4 Vegetables" && (
                <p className={styles.selectionHelper}>Select up to 4 vegetables ({selectedSides.length}/4 selected)</p>
              )}
              <div className={styles.sideOptionsList}>
                {item.sideOptions.map((side, index) => (
                  <label key={index} className={styles.sideOption}>
                    <input
                      name="side"
                      value={side.name}
                      className={styles.sideRadio}
                      checked={selectedSides.includes(side.name)}
                      onChange={() => handleSideSelection(side.name)}
                      type={item.name === "Veggie Plate - Any 4 Vegetables" ? "checkbox" : "radio"}
                    />
                    <span className={styles.sideLabel}>{side.name}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Drink options */}
          {item.drinkOptions && (
            <div className={styles.drinkOptionsSection}>
              <h3 className={styles.drinkOptionsTitle}>Drink Choice:</h3>
              <div className={styles.drinkOptionsList}>
                {item.drinkOptions.map((drink, index) => (
                  <label key={index} className={styles.drinkOption}>
                    <input
                      name="drink"
                      type="radio"
                      value={drink.name}
                      className={styles.drinkRadio}
                      checked={selectedDrink === drink.name}
                      onChange={() => handleDrinkSelection(drink.name)}
                    />
                    <span className={styles.drinkLabel}>{drink.name}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Protein options */}
          {item.proteinOptions && (
            <div className={styles.proteinOptionsSection}>
              <h3 className={styles.proteinOptionsTitle}>Protein Choice:</h3>
              <div className={styles.proteinOptionsList}>
                {item.proteinOptions.map((protein, index) => (
                  <label key={index} className={styles.proteinOption}>
                    <input
                      type="radio"
                      name="protein"
                      value={protein.name}
                      className={styles.proteinRadio}
                      checked={selectedProtein === protein.name}
                      onChange={() => handleProteinSelection(protein.name)}
                    />
                    <span className={styles.proteinLabel}>{protein.name}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Dressing options */}
          {item.dressingOptions && (
            <div className={styles.dressingOptionsSection}>
              <h3 className={styles.dressingOptionsTitle}>Dressing Choice:</h3>
              <div className={styles.dressingOptionsList}>
                {item.dressingOptions.map((dressing, index) => (
                  <label key={index} className={styles.dressingOption}>
                    <input
                      type="radio"
                      name="dressing"
                      value={dressing.name}
                      className={styles.dressingRadio}
                      checked={selectedDressing === dressing.name}
                      onChange={() => handleDressingSelection(dressing.name)}
                    />
                    <span className={styles.dressingLabel}>{dressing.name}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Wing sauce options */}
          {item.wingSauceOptions && (
            <div className={styles.wingSauceOptionsSection}>
              <h3 className={styles.wingSauceOptionsTitle}>Wing Sauce Choice:</h3>
              <div className={styles.wingSauceOptionsList}>
                {item.wingSauceOptions.map((wingSauce, index) => (
                  <label key={index} className={styles.wingSauceOption}>
                    <input
                      type="radio"
                      name="wingSauce"
                      value={wingSauce.name}
                      className={styles.wingSauceRadio}
                      checked={selectedWingSauce === wingSauce.name}
                      onChange={() => handleWingSauceSelection(wingSauce.name)}
                    />
                    <span className={styles.wingSauceLabel}>{wingSauce.name}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Special instructions */}
          <div className={styles.specialInstructionsSection}>
            <h3 className={styles.specialInstructionsTitle}>Special Instructions:</h3>
            <textarea
              rows={3}
              value={specialInstructions}
              className={styles.specialInstructionsInput}
              placeholder="Write your instruction here..."
              onChange={(e) => setSpecialInstructions(e.target.value)}
            />
          </div>

          {/* Legal section */}
          <div className={styles.legalSection}>
            <p className={styles.allergyWarning}>
              <strong>FOOD ALLERGY WARNING:</strong>
              <br />
              Our food may contain food allergens including, but not limited to: Dairy Products, Peanuts &amp; other
              nuts, Soy, Wheat, Glutens, Coconut. If any questions, please speak to manager.
            </p>
            <p className={styles.legalText}>* Not all requests can be accommodated.</p>
          </div>

          {/* Separator line */}
          <hr className={styles.separator} />

          {/* Add to order section */}
          <div className={styles.actionSection}>
            <button className={styles.addToOrderButton} onClick={handleAddToOrder}>
              ADD TO ORDER ${totalPrice}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default OrderModal;
