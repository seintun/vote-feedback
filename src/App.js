import React, { Component } from "react";
import "./App.css";
import Vote from "./components/Vote";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Vote />
        <p>
          Created with <span role="img">💖</span> by
          <a href="https://www.linkedin.com/in/seintun"> Sein Tun</a>
        </p>
      </div>
    );
  }
}

export default App;
