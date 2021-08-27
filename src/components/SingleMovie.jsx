import React from "react";
import { Button, Form } from "react-bootstrap";

class SingleMovie extends React.Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <div className="single-movie-container">
        <div className="single-movie-info">
          <h2 class="single-movie-title">Narcos</h2>
          <small class="single-movie-year">2018</small>
          <div className="comment-form">
            <h4>Leave a comment</h4>
          </div>
        </div>
        <div className="comment-section">
          <p>sdfadsgadgadfgadfg</p>
        </div>
      </div>
    );
  }
}
export default SingleMovie;
