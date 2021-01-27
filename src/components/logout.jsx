import React, { Component } from "react";
import user from "../services/userService";

class Logout extends Component {
  componentDidMount() {
    user.logout();
    window.location = "/login";
  }

  render() {
    return null;
  }
}

export default Logout;
