import React, { useState } from 'react';
import validator from 'validator';
import './Checkout.css';

const Checkout = (props) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    creditCardNumber: '',
    expiryDate: ''
  });
  const [paymentError, setPaymentError] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const totalPrice = localStorage.getItem('totalPrice'); // Retrieve total price from localStorage

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
    // Custom function to validate expiry date (MM/YY format)
    const isValidExpiryDate = (expiryDate) => {
        const parts = expiryDate.split('/');
        if (parts.length !== 2) return false;
        const month = parseInt(parts[0]);
        const year = parseInt(parts[1]);
        const currentYear = new Date().getFullYear() % 100;
        return month >= 1 && month <= 12 && year >= currentYear;
      };
    

  const handlePayment = () => {
    const { fullName, email, address, creditCardNumber, expiryDate } = formData;

    // Validation checks
    if (!fullName || !email || !address || !creditCardNumber || !expiryDate) {
      setPaymentError('All fields are required.');
    } else if (!validator.isEmail(email)) {
      setPaymentError('Invalid email address.');
    } else if (!validator.isCreditCard(creditCardNumber)) {
      setPaymentError('Invalid credit card number.');
    } else if (!isValidExpiryDate(expiryDate)) { 
      setPaymentError('Invalid expiry date.');
    } else {
      // Payment processing logic
      // Assuming payment is successful
      localStorage.removeItem(`cart_${props.username}`); // Clear cart items from localStorage
      setPaymentSuccess(true); // Set payment success state to true
    }
  };

  return (
    <div className="checkout-container">
    {paymentSuccess ? (
      <div className="summary">
        <h2>Payment Successful!</h2>
        {/* Display summary information here */}
      </div>
    ) : (
      <>
        <div className="bill-details">
        <h3>Bill Details</h3>
        <h4>Price to be Paid: ${totalPrice}</h4>
      </div>
      <h2>Checkout</h2>
      <div className="checkout-form">
        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleInputChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
        <textarea name="address" placeholder="Address" value={formData.address} onChange={handleInputChange}></textarea>
        <input type="text" name="creditCardNumber" placeholder="Credit Card Number" value={formData.creditCardNumber} onChange={handleInputChange} />
        <input type="text" name="expiryDate" placeholder="Expiry Date (MM/YY)" value={formData.expiryDate} onChange={handleInputChange} />
        {paymentError && <p className="error">{paymentError}</p>}
        <button onClick={handlePayment}>Pay Now</button>
      </div>
      </>
    )}
      
    </div>
  );
};

export default Checkout;
