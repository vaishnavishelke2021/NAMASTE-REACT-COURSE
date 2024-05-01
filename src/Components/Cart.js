import { useSelector } from "react-redux";
import "./Cart.css";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const isEmptyCart = cartItem.length === 0;

  return (
    <div className="cartContainer">
      <h1>Cart</h1>
      <div className="itemsContainer">
        {isEmptyCart && <h2>Your cart is empty</h2>}
        <ItemList items={cartItem} />
      </div>
    </div>
  );
};

export default Cart;
