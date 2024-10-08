import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  //local state variable -- super powerful variable.(we will use a hook useState)
  const [restaurantList, setRestaurantList] = useState([]);
  console.log(restaurantList);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  //useEffect hook

  //Higher Order Component
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const searchHandler = () => {
    const searchedList = restaurantList?.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchText?.toLowerCase())
    );
    setFilteredRestaurant(searchedList);
  };

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setRestaurantList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection
      </h1>
    );
  useEffect(() => {
    fetchData();
  }, []);

  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e?.target?.value)}
          />
          <button onClick={() => searchHandler()}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList?.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurnt
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant?.map((restaurant) => {
          console.log(restaurant, "r");
          // If restaurants average rating is greater than 4 ,then show restauran as promoted,else not.
          return restaurant?.info?.avgRating > 4.2 ? (
            <RestaurantCardPromoted
              resObj={restaurant}
              key={restaurant.info.id}
            />
          ) : (
            <RestaurantCard resObj={restaurant} key={restaurant.info.id} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
