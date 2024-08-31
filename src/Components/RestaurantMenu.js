import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { resInfo, isLoading } = useRestaurantMenu(resId);

  const info = resInfo?.cards?.[2]?.card?.card?.info;
  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;
  return isLoading ? (
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
