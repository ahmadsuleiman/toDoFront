import React, { Component } from "react";
import "../App.css";

class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.status || false,
    };
  }
  render() {
    const { onToggle } = this.props;
    return (
      <label className="switch">
        <input
          type="checkbox"
          checked={this.state.status}
          onClick={onToggle}
          onChange={this.change}
        />
        <span className="slider round"></span>
      </label>
    );
  }

  change = (e) => {
    console.log("status change: ", this.state.status);
    console.log("current target : ", e.currentTarget.checked);
    const { status } = e.currentTarget.checked;
    this.setState({ status });
  };
}

export default Switch;
