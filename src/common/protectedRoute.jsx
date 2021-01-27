import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

import User from "../services/userService";

class ProtectedRoute extends Component {
  render() {
    const { component: Component, render, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={(props) => {
          if (!User.getCurrentUser())
            return (
              <Redirect
                to={{
                  pathname: "/login",
                  state: {
                    from: this.props.location,
                  },
                }}
              />
            );
          return Component ? <Component {...props} /> : render(props);
        }}
      />
    );
  }
}

export default ProtectedRoute;
