import "./Body.css";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {
  const [listOfRes, setListOfRes] = useState(resList);

  const handleFilter = () => {
    const filteredRes = listOfRes.filter((res) => res.info.avgRating > 4);
    setListOfRes(filteredRes); // Update state here
    console.log(filteredRes);
  };

  return (
    <div className="body">
      <div className="filterInfo">
        <h2 className="topHeading">Restaurants Near You </h2>
        <button className="filterBtn" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="resCardContainer">
        {listOfRes.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
