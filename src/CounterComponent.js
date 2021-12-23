import { Component } from "react";

class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.localStorageDataFetch = this.localStorageDataFetch.bind(this);
  }

  incrementValue = (value) => {
    return parseInt(value) + 1;
  };

  updateCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
    if (localStorage.getItem("count"))
      localStorage.setItem(
        "count",
        this.incrementValue(localStorage.getItem("count"))
      );
    else localStorage.setItem("count", 1);
  };

  localStorageDataFetch = () => {
    const value = parseInt(localStorage.getItem("count"));
    this.setState(() => {
      count: this.incrementValue(value);
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.updateCount}>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default CounterComponent;
