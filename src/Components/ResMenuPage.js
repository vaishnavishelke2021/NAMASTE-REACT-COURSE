import "./ResMenuPage.css";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const ResMenuPage = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();

 

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6126255&lng=77.04108959999999&restaurantId=229" + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  //   const {name, cuisines, costForTwo} = resInfo?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[2]?.info;

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

//   function handleAddToCart(){
//     return console.log("added to cart");
//   }

  return (
    <div className="resInfo">
      <h1 className="resName">{resInfo?.cards[2]?.card?.card?.info?.name}</h1>

      <div className="resInfoBox">
        <div className="ratingCost">
          <p>
            ⭐ {resInfo?.cards[2]?.card?.card?.info?.avgRating} (
            {resInfo?.cards[2]?.card?.card?.info?.totalRatingsString})
          </p>
          <p className="costfortwo">
            • &nbsp;
            {
              resInfo?.cards[2]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants[2]?.info?.costForTwo
            }
          </p>
        </div>
        <h3 className="cuisines">
          {resInfo?.cards[2]?.card?.card?.info?.cuisines.join(",  ")}
        </h3>
      </div>

      <div className="btns">
        <button className="vegBtn">Veg</button>
        <button className="nonvegBtn">Non-veg</button>
      </div>

      <hr />

      
      {/* <h2>Menu: </h2> */}
      <div className="mainMenu">
        {itemCards.map((item) => (
          <div key={item?.card?.info?.id || Math.random()} className="menu">
            {" "}
            <div className="menuInfo">
              <h2>{item?.card?.info?.name}</h2>
              <p> <b>Description: </b>
                {item?.card?.info?.description || "Description not available"}
              </p>{" "}
              <h4>₹ {item?.card?.info?.price/100 || "Price not available"}</h4>{" "}
              <p><b>Category: </b> {item?.card?.info?.category}</p>{" "}
            </div>
            <div className="menuImg">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item?.card?.info?.imageId}`}
                alt={item?.card?.info?.name || "Menu Item Image"}
              />
              {/* <button onClick={handleAddToCart.bind(this, item)}>Add</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResMenuPage;
