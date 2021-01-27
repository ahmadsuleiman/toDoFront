import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./components/navbar";
import Tasks from "./components/tasks";
import TaskForm from "./components/taskForm";
import NotFound from "./common/notFound";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import RegisterForm from "./components/registerForm";
import User from "./services/userService";
import ProtectedRoute from './common/protectedRoute'

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = User.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <Navbar user={this.state.user} />
        <ToastContainer />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute
              path="/tasks/:id"
              component={TaskForm}
            />
            <Route
              path="/tasks"
              render={props => <Tasks {...props} user={user} />}
            />
            <Route path="/not-found" component={NotFound} />
            {user &&
              <Redirect exact from="/" to="/tasks" component={Tasks} />
            }
            {!user && <Redirect exact from="/" to="/login" component={Tasks} />}
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
