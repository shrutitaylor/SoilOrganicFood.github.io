import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = (props) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    console.log(props.username);
  };

  const adjustQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <section className="main intro" style={{ marginTop: '0', paddingTop: '0' }}>
    <div className="intro_section">
    <div className="cart" style={{margin: '100px'}}>
      {cart.length === 0 ? (
        <p>The cart is empty!</p>
      ) : (
        <div>
          <h2>Cart</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price} (Quantity: {item.quantity})
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                <input type="number" value={item.quantity} onChange={(e) => adjustQuantity(item.id, parseInt(e.target.value))} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
    </section>
  );
};

export default Cart;
