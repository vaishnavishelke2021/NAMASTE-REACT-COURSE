import "./ItemList.css";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  // const {id, name, price, defaultPrice} = items?.card?.info;
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
                <a href="#" className="addBtn">
                  {" "}
                  ADD{" "}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
