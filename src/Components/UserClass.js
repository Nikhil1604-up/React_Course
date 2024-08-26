import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Nikhil1604-up");
    const userData = await data.json();
    console.log(userData);
    this.setState({
      userInfo: userData,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    // this.state.count = this.state.count + 1;
    // NEVER UPDATE STATE VARIBALE DIRECTLY

    // this.setState({
    //   count: this.state.count + 1,
    // });

    // Here we have updated count ,so there will be no effect on count2 in the state only count is changed and count2 remain what it was in the initial state.

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
