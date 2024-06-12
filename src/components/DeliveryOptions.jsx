import React from 'react';
import './item.css';
const DeliveryOptions = ({ deliveryOption, handleDeliveryChange }) => {
  return (
    <div className="delivery-options">
      <h3>Choose Delivery Option</h3>
      <label>
        <input
          type="radio"
          value="standard"
          checked={deliveryOption === 'standard'}
          onChange={handleDeliveryChange}
        />
        Standard Delivery
      </label>
      <label>
        <input
          type="radio"
          value="express"
          checked={deliveryOption === 'express'}
          onChange={handleDeliveryChange}
        />
        Express Delivery
      </label>
      <label>
        <input
          type="radio"
          value="pickup"
          checked={deliveryOption === 'pickup'}
          onChange={handleDeliveryChange}
        />
        Pickup from Store
      </label>
    </div>
  );
};

export default DeliveryOptions;
