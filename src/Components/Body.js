import "./Body.css";
import RestaurantCard from "./RestaurantCard";

const Body = ()=>{
    return(
      <div className="body">
        <div>Search</div>
        <div className="resCardContainer">
           <RestaurantCard/>
        </div>
      </div>
    )
  }

export default Body;