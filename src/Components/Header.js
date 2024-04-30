import "./Header.css";
import {LOGO_URL} from "../utils/constants";
import {useState, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [logBtn, setLogBtn] = useState("Login")
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

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

  // Subscibing to our store using useSelector 
  const cartItems = useSelector((store)=> store.cart.items);


    return (
      <div className="header">
        <div className="logo-search">
          <img className="logo" src={LOGO_URL} alt="Food Logo" />
        </div>
        <div className="navlinks">
          <ul>
            <li id="checkStatus" className={onlineStatus ? "online" : "offline"}>
            {onlineStatus ? onlineIcon : offlineIcon} &nbsp;{onlineStatus === true ? "Online" : "Offline"}
            </li>
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
            <Link style={{ textDecoration: 'none' }} to="/cart">Cart ({cartItems.length} item)</Link>
            </li>
     
         {/* bundling/ lazy loading another component  */}
            <li>
            <Link style={{ textDecoration: 'none' }} to="/grocery">Grocery</Link>
            </li>
            <button className="logBtn" onClick={handleLogin}>{logBtn}</button>
            <li>{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;