import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { RestaurantCategory } from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { resInfo, isLoading } = useRestaurantMenu(resId);
  console.log(resInfo);

  const info = resInfo?.cards?.[2]?.card?.card?.info;
  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;

  const categoryItemcards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("cat:", categoryItemcards);
  return isLoading ? (
    <Shimmer />
  ) : info ? (
    <div className="text-center">
      <h1 className="font-bold my-5 text-2xl">{info.name}</h1>
      <p className="font-bold text-lg">
        {info.cuisines.join(",")} - {info.costForTwoMessage}
      </p>
      {/*Here we will built accordions */}
      {categoryItemcards?.map((category) => (
        <RestaurantCategory
          data={category?.card?.card}
          key={category?.card?.card?.title}
        />
      ))}
    </div>
  ) : (
    <div className="error">Failed to load menu information.</div>
  );
};

export default RestaurantMenu;
