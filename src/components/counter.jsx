import React, { Component } from "react";

class Counter extends Component {
  state = { value: this.props.counter.value }; //initialize once at the begining when an instance of the counter componet is created.

  render() {
    return (
      <React.Fragment>
        <span> {this.props.children} </span>
        <span className={this.getBadgeClass()}>{this.formatTag()}</span>
        <button
          onClick={() => this.handleIncremant()}
          className="btn btn-sm btn-secondary">
          Increment
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}>
          Delete
        </button>
        <br />
      </React.Fragment>
    );
  }

  getBadgeClass = () => {
    if (this.state.value === 0) {
      return "badge badge-warning m-2";
    } else {
      return "badge badge-primary m-2";
    }
  };

  formatTag = () => {
    if (this.state.value === 0) {
      return "Zero";
    } else {
      return this.state.value;
    }
  };

  handleIncremant = () => {
    this.setState({ value: this.state.value + 1 });
  };
}

export default Counter;
