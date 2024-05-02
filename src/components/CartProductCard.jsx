import React, { useState } from 'react';
import './CartProductCard.css'; // Import CSS file for styling

function CartProductCard({ product, onDelete }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  return (
    <div className="cart-product-card">
      <div className="cart-product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="cart-product-details">
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <div className="cart-delete-icon" onClick={() => onDelete(product.id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M19 6h-4.07l-1-1H9.07l-1 1H4v2h16V6zM8.5 18c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V9H8.5v9zM17 9v9h-3V9h3zm-4.5-6L15 3h3l1.5 1.5h-6z"
          />
        </svg>
      </div>
    </div>
  );
}

export default CartProductCard;
