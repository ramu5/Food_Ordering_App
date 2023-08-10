import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    // console.log(props)
    const { resData} = props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla: {deliveryTime} = {deliveryTime: 30},
    } = resData?.info;
    
    return (
      <>
      <div className="m-4 p-4 w-[250px] rounded-lg " >
        <img
          className="res-logo rounded-md"
          src={
            CDN_URL+
            cloudinaryImageId
          }
        ></img>
        <h3 className="font-bold py-1">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
      </>
    );
  };
   export const IsopenRestaurent=(RestaurantCard)=>{
    return(props)=>{
      return(
        <div>
        <label className="absolute m-1 bg-green-400 rounded-lg" >OPEN</label>
        
         <RestaurantCard {...props}/>
        </div>
      )
    }

  }
  
  export default RestaurantCard;
 