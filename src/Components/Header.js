import React from 'react'

export const Header = () => {
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

export default Header;
