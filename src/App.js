import "./styles.css";
import { Component } from "react";
import CounterComponent from "./CounterComponent";
class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterComponent />
      </div>
    );
  }
}

export default App;
