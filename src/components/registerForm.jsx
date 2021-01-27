import React from "react";

import Joi from "joi-browser";
import Form from "../common/form";
import User from "../services/userService";
import { toast } from "react-toastify";

class RegisterForm extends Form {
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
      .min(8)
      .required()
      .label("Password"),
  };

  doSubmit = async () => {
    try {
      const response = await User.register(this.state.data);
      User.loginWithUser(response.data);
      window.location = "/tasks";
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = error.response.data;
        this.setState({ errors });
        toast.error("Username already used.");
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form>
          {this.renderInput("username", "Username", "text")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
