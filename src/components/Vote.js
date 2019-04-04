import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

export default class Vote extends Component {
  state = {
    like: 100,
    dislike: 25,
    status: null
  };
  render() {
    const PLACEHOLDER_IMAGE =
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg";
    return (
      <div className="post">
        <div>
          <p>Are you watching, Avengers: Endgame?</p>
          <img
            width="200"
            src={PLACEHOLDER_IMAGE}
            alt={`The movie titled: Avengers: Endgame`}
          />
        </div>
        <button>
          <FontAwesomeIcon icon={faThumbsUp} /> |{" "}
          <span className="likes-counter">{this.state.like}</span>
        </button>
        <button>
          <FontAwesomeIcon icon={faThumbsDown} /> |{" "}
          <span className="dislikes-counter">{this.state.dislike}</span>
        </button>
      </div>
    );
  }
}
