import "./RestaurantCard.css";
// import {resObj} from "./Body.js";

const RestaurantCard = (props)=> {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, sla} = resData?.info;
    return(
      <div className="resCard"> 
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="Restaurant Img" />
        <h3>{name}</h3>
        <p className= "resCard-menu">{cuisines.join(", ")}</p>
        <div className= "resCard-rating">
          <p>⭐ {avgRating}</p>
          <p>{sla.deliveryTime} mins</p>
        </div>
      </div>
    )
  }

export default RestaurantCard;