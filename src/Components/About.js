import React from "react";
import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About </h1>
      <h2>This is food ordering app.</h2>

      <UserClass
        name="Nikhil Upadhyay (class)"
        location="New Delhi (class)"
        contact="nikhilupadhyay1604@gmail.com(class)"
      />
      <UserClass
        name="Demo Name(class)"
        location="LA (class)"
        contact="demoName@gmail.com(class)"
      />
    </div>
  );
};

export default About;
