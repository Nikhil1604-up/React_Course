import React from 'react'
import RestaurantCard from './RestaurantCard'
import { resObj } from '../utils/mockData'

const Body = () =>{
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {resObj?.map((restaurant)=>{
            return(
              <RestaurantCard resObj={restaurant.data} key={restaurant.data.info.id}/>
            )
          })}
        </div>
      </div>
    )
  }
export default Body;


