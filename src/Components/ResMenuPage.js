import "./ResMenuPage.css";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenuPage from "../utils/useResMenuPage";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const ResMenuPage = () => {

  const { resId } = useParams();
  const resInfo = useResMenuPage(resId); //created custom hook
  const [showIndex, setShowIndex] = useState(0);


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

      {categories.map((category, index) => (
        // controlled component 
        <RestaurantCategory key={category?.card?.card?.title}
         data={category?.card?.card}
         showItems={index === showIndex ? true: false}
         setShowIndex = {() => setShowIndex(index)}/>
      ))}
    </div>
  );
};

export default ResMenuPage;
