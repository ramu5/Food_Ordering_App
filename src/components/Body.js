import RestaurantCard ,{IsopenRestaurent}from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { IsopenRestaurent } from "./RestaurantCard";
const Body = () => {
  const [listOfRestaurents, setlistOfRestaurents] = useState([]);
  const [filterdRestaurant, setfilterdRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");
  const OpenRestaurent=IsopenRestaurent(RestaurantCard)

 

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.503554&lng=78.3963095&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await data.json();
    const cardWithRestaurants = response.data.cards.find((pCard) => pCard.card?.card?.id === 'top_brands_for_you')?.card?.card;
    const restaurants = cardWithRestaurants?.gridElements?.infoWithStyle?.restaurants || [];
    console.log(restaurants);
    setlistOfRestaurents(restaurants);
    setfilterdRestaurant(restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return ( <h1>LOOKS LIKE YOU ARE offline CHECK YOUR INTERNET</h1>);


  if (listOfRestaurents.length === 0) {
    return <ShimmerUi></ShimmerUi>;
  }
  return (
    <div className="body ">
      <div className="filter flex">
        <div className=" my-2 px-6">
          <input
            type="text"
            className="search-box border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button className="px-4 py-2 bg-green-200 m-4 rounded-md"
            onClick={() => {
              const filterdRestaurant = listOfRestaurents.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilterdRestaurant(filterdRestaurant);
            }}
          >
            search
          </button>
        </div>
        <div className="  my-2 px-6 flex items-center ">
        <button
          className="filter-btn px-4 py-2 bg-gray-200 rounded-md"
          onClick={() => {
            const filterdList = listOfRestaurents.filter(
              (res) => res.info.avgRating > 4
            );
            setfilterdRestaurant(filterdList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center h-100">
        {/* <RestaurantCard resData={resList[14]} /> */}
        {filterdRestaurant.map((restaurant) => {
          return (
           
            <Link
              key={restaurant.info.id}
              
              to={"/restaurents/" + restaurant.info.id}
            >
              {
                restaurant.info.isOpen ? <OpenRestaurent resData={restaurant} />:(<RestaurantCard resData={restaurant} />)
              }
            </Link>
            
          );
          
        })}
      </div>
    </div>
  );
};

export default Body;
