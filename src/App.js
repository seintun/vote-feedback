import React, { Component } from "react";
import "./App.css";
import Vote from "./components/Vote";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Vote />
      </div>
    );
  }
}

export default App;
