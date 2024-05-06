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

const RestaurantCard = () =>{
  return (
    <div className="res-card">
      <img className="res-logo" alt="BBQ" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ru7j7x8qqtvuzfuw7cdh" />
      <h3>BBQ</h3>
      <h4>Biryani,North Indian</h4>
      <h4>4.5 stars</h4>
      <h4>38 mins</h4>
  </div>
  )
  
}     

const Body = () =>{
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
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
 