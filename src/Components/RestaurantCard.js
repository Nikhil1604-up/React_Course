import React from 'react'

const RestaurantCard = (props) =>{
    const {resObj} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,sla} = resObj.info
    return (
          <div className="res-card" >
            <img className="res-logo" alt="BBQ" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} />
            <h3>{name}</h3>
            <div className='cusines-wrapper'>
            {cuisines?.map((cuisine, i) => (
              
              <h4 key={i}>{cuisine}</h4>
            ))}
            </div>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} mins</h4>
          </div>
    )
  }   

export default RestaurantCard;
