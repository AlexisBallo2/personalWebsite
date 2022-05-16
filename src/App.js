import React from "react";
import "./styles.css";
import HomePage from "./HomePage";

export default class App extends React.Component {
  state = {
    users: [],
  };

  render() {
    const { users } = this.state;
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}
