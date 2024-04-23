import "./RestaurantCard.css";
import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props)=> {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, sla} = resData?.info;
    return(
      <div className="resCard"> 
        <img src={CDN_URL + cloudinaryImageId} alt="Restaurant Img" />
        <h3>{name}</h3>
        <p className= "resCard-menu">{cuisines.join(", ")}</p>
        <div className= "resCard-rating">
          <p>⭐ {avgRating}</p>
          <p>{sla.deliveryTime} mins</p>
        </div>
      </div>
    )
  }


export const  withPromotedLabel = (RestaurantCard)=>{
  return (props) =>{
    return (
      <div>
        <label className="labelPromoted">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;