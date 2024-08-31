import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  //local state variable -- super powerful variable.(we will use a hook useState)
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  //useEffect hook

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
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurnt
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant?.map((restaurant) => {
          return (
            <RestaurantCard resObj={restaurant} key={restaurant.info.id} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
