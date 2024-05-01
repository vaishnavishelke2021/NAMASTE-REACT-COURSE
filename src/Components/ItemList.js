import "./ItemList.css";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  console.log(items);
  // const {id, name, price, defaultPrice} = items?.card?.info;

  const dispatch = useDispatch()

  const handleAddItem = (item)=>{
    // dispatch action 
    dispatch(addItem(item));    // this 'pizza' will go in isAction.payload     i.e. action = { payload: 'pizza'}     it is an object
  }

  return (
    <div>
      <div className="mainMenu">
        {items?.map((item) => (
          <div key={item?.card?.info?.id || Math.random()} className="menu">
            {" "}
            <div className="menuInfo">
              <h3>{item?.card?.info?.name}</h3>
              <h4 className="price">
                ₹{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100 ||
                  "Price not available"}
              </h4>{" "}
              <div className="ratings">
                <p className="rating">
                  ⭐ {item?.card?.info?.ratings?.aggregatedRating?.rating}
                </p>
                <p className="rating">
                  (
                  {item?.card?.info?.ratings?.aggregatedRating?.ratingCount ||
                    "No rating available"}
                  )
                </p>
              </div>
              <p className="category">
                <b>Category: </b> {item?.card?.info?.category}
              </p>{" "}
            </div>


            <div className="menuImg">
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                alt={item?.card?.info?.name || "Menu Item Image"}
              />
              <div className="addBtnDiv">
                 <button onClick={() => handleAddItem(item)} className="addBtn">ADD</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
