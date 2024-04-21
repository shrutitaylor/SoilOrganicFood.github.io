import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = (props) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load cart data from local storage for the specific user
    const storedCart = JSON.parse(localStorage.getItem(`cart_${props.username}`)) || [];
    setCart(storedCart);
  }, [props.username]);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem(`cart_${props.username}`, JSON.stringify(updatedCart));
  };

  const adjustQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem(`cart_${props.username}`, JSON.stringify(updatedCart));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach(item => {
      totalPrice += item.price * (item.quantity || 1);
    });
    localStorage.setItem('totalPrice', totalPrice.toFixed(2)); // Store total price in localStorage
    return totalPrice.toFixed(2);
  };

  return (
    <section className="main intro" style={{ marginTop: '0', paddingTop: '0' }}>
      <div className="intro_section">
        <div className="cart" style={{ margin: '100px' }}>
          {cart.length === 0 ? (
            <>
            <p>The cart is empty!</p>
            <div className='product'>
            <button ><Link className="nav-link" style={{color:'#ede1d2'}} to="/products">View more Products</Link></button>
            </div>
            </>
          ) : (
            <div>
              <h2>Cart</h2>
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    {item.name} - ${item.price} (Quantity:
                    <input
                      type="number"
                      value={item.quantity || 1}
                      onChange={(e) => adjustQuantity(item.id, parseInt(e.target.value))}
                    />
                    )
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </li>
                ))}
              </ul>
              <div>
                <h3>Bill</h3>
                <ul>
                  {cart.map((item, index) => (
                    <li key={index}>
                      {item.name} - Quantity: {item.quantity || 1} - Price: ${item.price * (item.quantity || 1)}
                    </li>
                  ))}
                  <li>Total: ${calculateTotalPrice()}</li>
                </ul>
               {/* Checkout button */}
              <button className='paynow-btn'>
                <Link style={{ color: '#ede1d2' }} to={{ pathname: "/checkout", state: { cart: cart } }}>Checkout</Link>
              </button>
            </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
