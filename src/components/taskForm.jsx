import React from "react";

import Form from "../common/form";
import Joi from "joi-browser";

import { createTask } from "../services/taskService";
import { getCurrentUser } from "../services/userService";

class TaskForm extends Form {
  state = {
    data: {
      taskname: "",
      userid: getCurrentUser().id,
      description: "",
    },
    errors: {},
  };

  schema = {
    userid: Joi.number(),
    description: Joi.string(),
    taskname: Joi.string()
      .required()
      .label("Task Name"),
  };

  doSubmit = async () => {
    await createTask(this.state.data);
    this.props.history.push("/tasks");
  };

  render() {
    return (
      <React.Fragment>
        <h1>Task Form</h1>
        <div>
          <form>
            {this.renderInput("taskname", "Task Name", "text")}
            {this.renderInput("description", "Task Description", "textaria")}
            {this.renderButton("Add")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default TaskForm;
