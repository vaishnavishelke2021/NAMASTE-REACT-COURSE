import "./Header.css";
import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [logBtn, setLogBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const handleLogin = () => {
    logBtn === "Login" ? setLogBtn("Logout") : setLogBtn("Login");
  };

  const onlineIcon = (
    <svg width="10" height="10">
      <circle cx="5" cy="5" r="5" fill="#41B06E" />
    </svg>
  );

  const offlineIcon = (
    <svg width="10" height="10">
      <circle cx="5" cy="5" r="5" fill="#FF204E" />
    </svg>
  );

  const cartIcon = (
    <svg style={{marginTop: "5px"}}
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      fill="currentColor"
      class="bi bi-cart-fill"
      viewBox="0 0 16 16"
    >
      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
    </svg>
  );

  // Subscibing to our store using useSelector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="header">
      <div className="logo-search">
        <img className="logo" src={LOGO_URL} alt="Food Logo" />
      </div>
      <div className="navlinks">
        <ul>
          <li id="checkStatus" className={onlineStatus ? "online" : "offline"}>
            {onlineStatus ? onlineIcon : offlineIcon} &nbsp;
            {onlineStatus === true ? "Online" : "Offline"}
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/cart">
              {cartIcon} ({cartItems.length})
            </Link>
          </li>

          {/* bundling/ lazy loading another component  */}
          <li className="grocery">
            <Link style={{ textDecoration: "none" }} to="/grocery">
              Grocery
            </Link>
          </li>
          <button className="logBtn" onClick={handleLogin}>
            {logBtn}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
