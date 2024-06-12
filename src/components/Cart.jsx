import React, { useState } from 'react';
import CartItem from './CartItem';
import PaymentOptions from './PaymentOptions';
import DeliveryOptions from './DeliveryOptions';
import './Cart.css';

function Cart({ cart }) {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [deliveryOption, setDeliveryOption] = useState('standard');

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleDeliveryChange = (e) => {
    setDeliveryOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert(`Payment method: ${paymentMethod}, Delivery option: ${deliveryOption}`);
  };

  return (
    <div className="cart-container">
      <div className="cart">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul className="cart-items">
            {cart.map((product, index) => (
              <CartItem key={index} product={product} />
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <form onSubmit={handleSubmit} className="cart-form">
            <PaymentOptions paymentMethod={paymentMethod} handlePaymentChange={handlePaymentChange} />
            <DeliveryOptions deliveryOption={deliveryOption} handleDeliveryChange={handleDeliveryChange} />
            <button type="submit" className="checkout-button">Proceed to Checkout</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Cart;
