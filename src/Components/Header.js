import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
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
          <li> Status :{onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact"> Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery"> Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
