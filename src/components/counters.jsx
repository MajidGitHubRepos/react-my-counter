import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 0, value: 4 },
      { id: 1, value: 3 },
      { id: 2, value: 1 },
      { id: 3, value: 0 },
    ],
  };
  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="btn btn-primary m-2">
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={() => this.handleDelete(counter.id)}
            counter={counter}>
            <h4>Item #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  handleDelete = (counterID) => {
    // console.log("handleDelete called in Counters component! ", counterID);
    const counters = this.state.counters.filter((c) => c.id !== counterID);
    this.setState({ counters: counters });
  };
}

export default Counters;
