import React, { Component } from "react";
import Switch from "../common/switch";
import Table from "../common/table";

class TasksTable extends Component {
  columns = [
    { path: "taskname", label: "Task Name" },
    { path: "description", label: "Description" },
    {
      key: "toggle",
      content: (task) => (
        <Switch
          status={task.status}
          toggled={task.toggled}
          onToggle={() => this.props.onToggle(task.id)}
        />
      ),
    },
  ];

  render() {
    const { tasks } = this.props;

    return <Table data={tasks} columns={this.columns} />;
  }
}

export default TasksTable;
