import React, { Component } from "react";

export default class Vote extends Component {
  render() {
    return (
      <div className="post">
        <button>Like</button>
        <button>Dislike</button>
      </div>
    );
  }
}
