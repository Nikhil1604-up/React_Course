import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
  }

  componentDidMount() {}

  render() {
    const { name, location, contact } = this.props;
    const { count, count2 } = this.state;

    const incrementHandler = () => {
      // this.state.count = this.state.count + 1;
      // NEVER UPDATE STATE VARIBALE DIRECTLY

      this.setState({
        count: this.state.count + 1,
      });

      // Here we have updated count ,so there will be no effect on count2 in the state only count is changed and count2 remain what it was in the initial state.
    };
    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <button onClick={() => incrementHandler()}>Count Increase</button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
