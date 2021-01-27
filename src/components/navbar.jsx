import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    const { user } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/login">
          To Do
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {user && (
              <React.Fragment>
                <li className="nav-item ">
                  <span className="nav-link">{user.username}</span>
                </li>
              </React.Fragment>
            )}
            {!user && (
              <React.Fragment>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
              </React.Fragment>
            )}
            {user && (
              <React.Fragment>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/logout">
                    Logout
                  </NavLink>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
