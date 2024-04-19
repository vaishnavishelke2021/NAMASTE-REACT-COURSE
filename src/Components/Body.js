import "./Body.css";
import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";


const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);

  useEffect(()=>{
      fetchData();
  }, [])

  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=19.9974533&lng=73.78980229999999");
    const json = await data.json();
    console.log(json);
    setListOfRes(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants)
  }

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
