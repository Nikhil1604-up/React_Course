import React from "react";
import { useNavigate } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resObj } = props;
  const navigate = useNavigate();
  const { cloudinaryImageId, name, cuisines, avgRating, sla, id } = resObj.info;

  const cardClikHandler = () => {
    navigate(`/restaurants/${id}`);
  };
  return (
    <div className="res-card" onClick={cardClikHandler}>
      <img
        className="res-logo"
        alt="BBQ"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <div className="cusines-wrapper">
        {cuisines?.map((cuisine, i) => (
          <h4 key={i}>{cuisine}</h4>
        ))}
      </div>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
