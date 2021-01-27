import React from "react";

import Joi from "joi-browser";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

import user from "../services/userService";

import Form from "../common/form";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password"),
  };

  doSubmit = async () => {
    const { username, password } = this.state.data;
    try {
      await user.login(username, password);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (error) {
      if (error.response && error.response.status === 404) {
        const errors = { ...this.state.errors };
        errors.username = error.response.data;
        this.setState({ errors });
        toast.error("Your credentials are not correct, please try again.");
      }
    }
  };

  render() {
    if (user.getCurrentUser()) return <Redirect to="/" />;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", "text")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
