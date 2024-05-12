import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';
import { useSelector } from 'react-redux';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const cartIcon = (
    <svg
      style={{ marginTop: "5px" }}
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      fill="currentColor"
      className="bi bi-cart-fill"
      viewBox="0 0 16 16"
    >
      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
    </svg>
  );

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="hamburger-menu">
      <div
        className={`hamburger-icon ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/cart">{cartIcon} ({cartItems.length})</Link>
        <Link to="/grocery">Grocery</Link>
      </nav>
    </div>
  );
};

export default HamburgerMenu;