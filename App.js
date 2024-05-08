import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *   -Logo
 *   -Nav Items
 *
 * Body
 *   -Search
 *   -RestaurantContainer
 *      -RestaurantCard
 *        -Image
 *        -Name of Res,Rating,cusinies
 *
 * Footer
 *   -Copyright
 *   -Links
 *   -Address
 *   -Contact
 */

const Header = () => {
  return (
    <div className="header">
    <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Bl_Yo0MHwKljQ0U5NasN3_7iuCpuOkYjxqZRbxzeJRj31BcBArVwbWEZew1MhhOFkaA&usqp=CAU"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) =>{
  const {resObj} = props;
  console.log(resObj)
  return (
    <div className="res-card">
      <img className="res-logo" alt="BBQ" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ru7j7x8qqtvuzfuw7cdh" />
      <h3>{resObj.data.info.name}</h3>
      {resObj.data.info.cuisines.map((el) => <h4>{el}</h4>)}
      <h4>{resObj.data.info.avgRaiting} stars</h4>
      <h4>{resObj.data.info.delTime} mins</h4>
  </div>
  )
  
}   

const resObj = {
  data: {
      "info": {
        "id": "626148",
        "name": "La Pino'z Pizza",
        "cloudinaryImageId": "ezjogwtzx40ko0wlat5l",
        "locality": "Salt Lake",
        "areaName": "Karol Bagh",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
        ],
        "avgRaiting":"4.2",
        "delTime":"34"
      }
    }
}

const Body = () =>{
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resObj={resObj}/>
        {/* <RestaurantCard resName="KFC" cuisine="Fast Food,Wings,Burgers"/> */}
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
 