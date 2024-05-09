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

const resObj = [
  {
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
        "delTime":"34",
        "imageData":'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ru7j7x8qqtvuzfuw7cdh'
      }
    }
  },
  {
    data: {
      "info": {
        "id": "123456",
        "name": "Subway",
        "cloudinaryImageId": "abc123",
        "locality": "Downtown",
        "areaName": "Central Square",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Burgers",
          "Fast Food"
        ],
        "avgRaiting":"4.5",
        "delTime":"25",
        "imageData":'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63178e3e64d503a479f2a2048a474552'
      }
    }
  },
  {
    data: {
      "info": {
        "id": "789012",
        "name": "Sushi World",
        "cloudinaryImageId": "xyz789",
        "locality": "Midtown",
        "areaName": "Broadway",
        "costForTwo": "₹800 for two",
        "cuisines": [
          "Sushi",
          "Japanese"
        ],
        "avgRaiting":"4.8",
        "delTime":"40",
        "imageData":'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/57ad35c7a51bfc3df3703fef028ad071'
      }
    }
  },
  {
    data: {
      "info": {
        "id": "345678",
        "name": "Taco Shack",
        "cloudinaryImageId": "def456",
        "locality": "Uptown",
        "areaName": "Main Street",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Tacos",
          "Mexican"
        ],
        "avgRaiting":"4.3",
        "delTime":"20",
        "imageData":'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/7bb82538502ddf558058e8264d82d4c9'
      }
    }
  },
  {
    data: {
      "info": {
        "id": "901234",
        "name": "Spice Palace",
        "cloudinaryImageId": "mno901",
        "locality": "Chinatown",
        "areaName": "Mott Street",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Indian",
          "Spicy Food"
        ],
        "avgRaiting":"4.6",
        "delTime":"35",
        "imageData":'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/puq9zrt9axb9hrrvljyr'
      }
    }
  }
];


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
 