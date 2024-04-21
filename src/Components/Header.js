import "./Header.css";

import {LOGO_URL} from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [logBtn, setLogBtn] = useState("Login")

  const handleLogin = () => {
    logBtn === "Login" ? setLogBtn("Logout") : setLogBtn("Login");
  };

    return (
      <div className="header">
        <div className="logo-search">
          <img className="logo" src={LOGO_URL} alt="Food Logo" />
        </div>
        <div className="navlinks">
          <ul>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/">Home</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/about">About Us</Link>
            </li>
            <li>
            <Link style={{ textDecoration: 'none' }} to="/contact">Contact Us</Link>
            </li>
            <li>
            <Link style={{ textDecoration: 'none' }} to="/cart">Cart</Link>
            </li>
            <button className="logBtn" onClick={handleLogin}>{logBtn}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;