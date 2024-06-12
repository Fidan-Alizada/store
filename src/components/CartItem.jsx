import React from 'react';
import './item.css';

const CartItem = ({ product }) => {
  return (
    <li className="cart-item">
      <img src={product.thumbnail} alt={product.title} className="cart-image" />
      <div>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </div>
    </li>
  );
};

export default CartItem;
