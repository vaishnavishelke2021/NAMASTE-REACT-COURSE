import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
import logo from "../utils/logo.png";

const Footer = () => {
  const handleEmailSubmit = (event) => {
    event.preventDefault(); 
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="footer-logo">
             
                <img src={logo} alt="Your Logo" /><span>GoYum</span>
              
            </div>
            <p className="footer-description">
            Delivering Deliciousness to Your Doorstep.
            </p>
          </div>
          <div className="col">
            <h4 className="footer-title">Links</h4>
            <ul className="footer-list">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <a href="/about">Blog</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4 className="footer-title">Stay Connected</h4>
            <p className="footer-email">
              Subscribe to our newsletter for updates and promotions.
            </p>
            <form onSubmit={handleEmailSubmit} className="footer-form">
              <input type="email" name="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} GoYum | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
