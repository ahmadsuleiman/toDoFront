import React, { Component } from "react";

import { getTasks, updateTask } from "../services/taskService";
import { getCurrentUser } from "../services/userService";
import TasksTable from "./tasksTable";
import { Link } from "react-router-dom";

class Tasks extends Component {
  state = {
    userid: "",
    tasks: [],
  };

  async componentDidMount() {
    const user = getCurrentUser();
    const { data: tasks } = await getTasks(user.id);
    this.setState({ tasks });
  }

  handleToggle = async (id) => {
    let tasks = [...this.state.tasks];
    let ind = tasks.findIndex((task) => task.id === id);
    const { data: task } = await updateTask(tasks[ind]);
    tasks[ind] = task;
    this.setState({ tasks });
  };

  render() {
    let { tasks } = this.state;
    let { user } = this.props;

    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            {user && (
              <Link
                to={"/tasks/new"}
                className="btn btn-primary"
                style={{ marginBottom: 20 }}
              >
                Create Task
              </Link>
            )}

            <h1>Tasks</h1>

            <TasksTable tasks={tasks} onToggle={this.handleToggle} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Tasks;
