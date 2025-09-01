import { useState } from "react";
import styles from "./OrderModal.module.css";

function OrderModal({ item, isOpen, onClose, onAddToOrder }) {
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState("");

  if (!isOpen || !item) return null;

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToOrder = () => {
    onAddToOrder({
      ...item,
      quantity,
      specialInstructions,
    });
    onClose();
    // Reset form
    setQuantity(1);
    setSpecialInstructions("");
  };

  const totalPrice = (item.price * quantity).toFixed(2);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <h2 className={styles.itemName}>{item.name}</h2>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

        {/* Separator line */}
        <hr className={styles.separator} />

        {/* Item Description */}
        <div className={styles.descriptionSection}>
          <p className={styles.itemDescription}>{item.description}</p>
        </div>

        {/* Quantity Selector */}
        <div className={styles.quantitySection}>
          <label className={styles.quantityLabel}>Quantity:</label>
          <div className={styles.quantityControls}>
            <button className={styles.quantityButton} onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
              −
            </button>
            <span className={styles.quantityDisplay}>{quantity}</span>
            <button className={styles.quantityButton} onClick={() => handleQuantityChange(1)}>
              +
            </button>
          </div>
        </div>

        {/* Special Instructions */}
        <div className={styles.specialInstructionsSection}>
          <label className={styles.specialInstructionsLabel}>Special Instructions:</label>
          <textarea
            className={styles.specialInstructionsInput}
            placeholder="Write your request here"
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
            rows={3}
          />
        </div>

        {/* Legal Text */}
        <div className={styles.legalSection}>
          <p className={styles.legalText}>Not all requests can be accommodated.</p>
          <p className={styles.allergyWarning}>
            <strong>FOOD ALLERGY WARNING:</strong> Our food may contain food allergens including, but not limited to:
            Dairy Products, Peanuts & other nuts, Soy, Wheat, Glutens, Coconut. If any questions, please speak to
            manager.
          </p>
        </div>

        {/* Separator line */}
        <hr className={styles.separator} />

        {/* Add to Order Button */}
        <div className={styles.actionSection}>
          <button className={styles.addToOrderButton} onClick={handleAddToOrder}>
            Add to order ${totalPrice}
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderModal;
