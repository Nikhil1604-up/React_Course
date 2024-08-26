import React from "react";
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
    </div>
  );
};

export default About;
