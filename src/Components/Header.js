import "./Header.css";
import SearchBar from "./Search";
import {LOGO_URL} from "../utils/constants";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-search">
          <img className="logo" src={LOGO_URL} alt="Food Logo" />
          <div><SearchBar /></div>
        </div>
        <div className="navlinks">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;