// OnlinePaymentIntegration.js

import React, { useState } from 'react';
import './OnlinePaymentIntegration.css';

const OnlinePaymentIntegration = () => {
  // State to manage payment form input
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  // Function to handle card number input change
  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  // Function to handle expiry date input change
  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  // Function to handle CVV input change
  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform action with the submitted payment details (e.g., process payment)
    console.log('Payment details:', { cardNumber, expiryDate, cvv });
    // Clear the form after submission
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
  };

  return (
    <div className="online-payment-integration">
      <h2>Secure Online Payment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={handleCardNumberChange}
          required
        />
        <input
          type="text"
          placeholder="Expiry Date (MM/YYYY)"
          value={expiryDate}
          onChange={handleExpiryDateChange}
          required
        />
        <input
          type="text"
          placeholder="CVV"
          value={cvv}
          onChange={handleCvvChange}
          required
        />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default OnlinePaymentIntegration;
