import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
const Body = () => {
  //local state variable -- super powerful variable.(we will use a hook useState)
  const [restaurantList, setRestaurantList] = useState([]);
  //useEffect hook

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setRestaurantList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);


  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList?.filter(
              (res) => res.info.avgRating > 4
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurnt
        </button>
      </div>
      <div className="res-container">
        {restaurantList?.map((restaurant) => {
          return (
            <RestaurantCard resObj={restaurant} key={restaurant.info.id} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
