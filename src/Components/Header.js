import "./Header.css";
import SearchBar from "./Search";
import {LOGO_URL} from "../utils/constants";
import {useState} from "react";

const Header = ({ listOfRes, setFilteredRes }) => {
  const [logBtn, setLogBtn] = useState("Login")

  const handleLogin = () => {
    logBtn === "Login" ? setLogBtn("Logout") : setLogBtn("Login");
  };

    return (
      <div className="header">
        <div className="logo-search">
          <img className="logo" src={LOGO_URL} alt="Food Logo" />
          <div><SearchBar listOfRes={listOfRes} setFilteredRes={setFilteredRes}/></div>
        </div>
        <div className="navlinks">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="logBtn" onClick={handleLogin}>{logBtn}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;