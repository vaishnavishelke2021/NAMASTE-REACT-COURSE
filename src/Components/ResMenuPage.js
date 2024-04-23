import "./ResMenuPage.css";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenuPage from "../utils/useResMenuPage";
import RestaurantCategory from "./RestaurantCategory";

const ResMenuPage = () => {

  const { resId } = useParams();
  const resInfo = useResMenuPage(resId); //created custom hook


  if (resInfo === null) return <Shimmer />;
 

  //   const {name, cuisines, costForTwo} = resInfo?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[2]?.info;
  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards); 

  const categories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  console.log(categories);

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
      {/* <div className="mainMenu">
        {itemCards.map((item) => (
          <div
            key={itemCards?.item?.card?.info?.id || Math.random()}
            className="menu"
          >
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
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item?.card?.info?.imageId}`}
                alt={item?.card?.info?.name || "Menu Item Image"}
              />
            </div>
          </div>
        ))}
      </div> */}

      {categories.map((category) => (
        <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}/>
      ))}
    </div>
  );
};

export default ResMenuPage;
