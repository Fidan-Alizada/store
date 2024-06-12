import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/cart">
          <img src="https://cdn-icons-png.freepik.com/512/7835/7835563.png" alt="Cart" className="cart-icon" width={30} /></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
