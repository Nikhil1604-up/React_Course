import React from 'react'

const RestaurantCard = (props) =>{
    const {resObj} = props;
    const {imageData,name,cuisines,avgRaiting,delTime} = resObj.info
    return (
          <div className="res-card" >
            <img className="res-logo" alt="BBQ" src={imageData} />
            <h3>{name}</h3>
            {cuisines.map((cuisine, i) => (
              <h4 key={i}>{cuisine}</h4>
            ))}
            <h4>{avgRaiting} stars</h4>
            <h4>{delTime} mins</h4>
          </div>
    )
  }   

export default RestaurantCard;
