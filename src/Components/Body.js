import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";



let restaurantListJs = [
  {
    data: {
      info: {
        id: "626148",
        name: "La Pino'z Pizza",
        cloudinaryImageId: "ezjogwtzx40ko0wlat5l",
        locality: "Salt Lake",
        areaName: "Karol Bagh",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas"],
        avgRaiting: "3.9",
        delTime: "34",
        imageData:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ru7j7x8qqtvuzfuw7cdh",
      },
    },
  },
  {
    data: {
      info: {
        id: "123456",
        name: "Subway",
        cloudinaryImageId: "abc123",
        locality: "Downtown",
        areaName: "Central Square",
        costForTwo: "₹500 for two",
        cuisines: ["Burgers", "Fast Food"],
        avgRaiting: "3.4",
        delTime: "25",
        imageData:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63178e3e64d503a479f2a2048a474552",
      },
    },
  },
  {
    data: {
      info: {
        id: "789012",
        name: "Sushi World",
        cloudinaryImageId: "xyz789",
        locality: "Midtown",
        areaName: "Broadway",
        costForTwo: "₹800 for two",
        cuisines: ["Sushi", "Japanese"],
        avgRaiting: "4.8",
        delTime: "40",
        imageData:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/57ad35c7a51bfc3df3703fef028ad071",
      },
    },
  },
  {
    data: {
      info: {
        id: "345678",
        name: "Taco Shack",
        cloudinaryImageId: "def456",
        locality: "Uptown",
        areaName: "Main Street",
        costForTwo: "₹300 for two",
        cuisines: ["Tacos", "Mexican"],
        avgRaiting: "4.3",
        delTime: "20",
        imageData:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/7bb82538502ddf558058e8264d82d4c9",
      },
    },
  },
  {
    data: {
      info: {
        id: "901234",
        name: "Spice Palace",
        cloudinaryImageId: "mno901",
        locality: "Chinatown",
        areaName: "Mott Street",
        costForTwo: "₹600 for two",
        cuisines: ["Indian", "Spicy Food"],
        avgRaiting: "4.6",
        delTime: "35",
        imageData:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/puq9zrt9axb9hrrvljyr",
      },
    },
  },
];


const Body = () => {

  //local state variable -- super powerful variable.(we will use a hook useState)
const [restaurantList,setRestaurantList] = useState([]);
  //UseEffect hook 

  const fetchData = async() =>{
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const jsonData = await data.json();
    setRestaurantList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setRestaurantList(jsonData?.data?.cards[4]);

  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList?.filter(
              (res) => res.info.avgRating > 4
              );
              setRestaurantList(filteredList)
          }}
        >
          Top Rated Restaurnt
        </button>
      </div>
      <div className="res-container">
        {restaurantList?.map((restaurant) => {
          return (
            <RestaurantCard
              resObj={restaurant}
              key={restaurant.info.id}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
