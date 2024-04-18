import "./Header.css";

const Header = () => {
    return (
      <div className="header">
        <div>
          <img className="logo" src="https://png.pngtree.com/png-vector/20220706/ourmid/pngtree-food-logo-png-image_5687717.png" alt="Food Logo" />
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