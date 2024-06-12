import React from 'react';
import './item.css';
const PaymentOptions = ({ paymentMethod, handlePaymentChange }) => {
  return (
    <div className="payment-options">
      <h3>Choose Payment Method</h3>
      <label>
        <input
          type="radio"
          value="card"
          checked={paymentMethod === 'card'}
          onChange={handlePaymentChange}
        />
        Credit Card
      </label>
      <label>
        <input
          type="radio"
          value="cash"
          checked={paymentMethod === 'cash'}
          onChange={handlePaymentChange}
        />
        Cash on Delivery
      </label>
    </div>
  );
};

export default PaymentOptions;
