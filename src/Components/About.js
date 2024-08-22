import React from "react";
import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About </h1>
      <h2>This is food ordering app.</h2>
      <User
        name="Nikhil Upadhyay (functional)"
        location="New Delhi (functional)"
        contact="nikhilupadhyay1604@gmail.com(functional)"
      />
      <UserClass
        name="Nikhil Upadhyay (class)"
        location="New Delhi (class)"
        contact="nikhilupadhyay1604@gmail.com(class)"
      />
    </div>
  );
};

export default About;
