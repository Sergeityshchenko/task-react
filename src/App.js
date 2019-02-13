import React, { Component } from "react";
import Event from "./Event/Event";
import Task from "./Task/Task";

import "./App.css";

class App extends Component {
  render() {
    let youClicked = function() {
      alert("You clicked!");
    };
    return (
      <div className="App">
        <Event myFuction={youClicked} />
        <Task />
      </div>
    );
  }
}

export default App;
