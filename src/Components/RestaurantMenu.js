import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(`${MENU_API}${resId}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  const info = resInfo?.cards?.[2]?.card?.card?.info;
  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;
  return loading ? (
    <Shimmer />
  ) : info ? (
    <div className="menu">
      <h1>{info.name}</h1>
      <p>
        {info.cuisines.join(",")} - {info.costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((menuItem) => {
          return (
            <li key={menuItem?.card?.info?.id}>
              {menuItem?.card?.info?.name} -{"Rs. "}
              {menuItem?.card?.info?.defaultPrice / 100 ||
                menuItem?.card?.info?.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <div className="error">Failed to load menu information.</div>
  );
};

export default RestaurantMenu;
