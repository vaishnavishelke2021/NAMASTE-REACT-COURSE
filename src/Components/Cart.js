import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearcart = ()=>{
    dispatch(clearCart());
  }

  return (
    <div className="cartContainer">
      <div className="itemHeader">
      <h2>Cart</h2>
      <button className="clearCartBtn" onClick={handleClearcart}>Clear Cart</button>
      </div>
      <div className="itemsContainer">
        {cartItem.length === 0 && <h3>Your cart is empty! Add items to the cart</h3>}
        <ItemList items={cartItem} />
      </div>
    </div>
  );
};

export default Cart;
