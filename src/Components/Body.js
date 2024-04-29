import "./Body.css";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import SearchBar from "./Search";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // "https://www.swiggy.com/mapi/homepage/getCards?lat=19.9974533&lng=73.78980229999999"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // const jsonData =json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;

    const jsonData =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRes(jsonData);
    setFilteredRes(jsonData);
  };

  const handleFilter = () => {
    const filteredRestaurant = listOfRes.filter(
      (res) => res.info.avgRating > 4
    );
    setFilteredRes(filteredRestaurant); // Update state here
    console.log(filteredRestaurant);
  };

  // conditional rendering
  // if (listOfRes.length === 0) {
  //   return <Shimmer />;
  // }

  const { loggedInUser, setUserName } = useContext(UserContext);

  if (onlineStatus === false)
    return (
      <h1 className="offlineMsg">
        Looks like you are offline! <br /> Check your internet connection
      </h1>
    );

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="bodyContainer">
        <div className="filterInfo">
          <h2 className="topHeading">Restaurants Near You </h2>
          <button className="filterBtn" onClick={handleFilter}>
            Top Rated Restaurants
          </button>
          <SearchBar listOfRes={listOfRes} setFilteredRes={setFilteredRes} />
          <div className="userNameInpContext">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              placeholder="Enter username"
              value={loggedInUser}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="resCardContainer">
          {filteredRes.map((restaurant) => (
            <Link
              style={{ textDecoration: "none" }}
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {restaurant.info.promoted === true ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
