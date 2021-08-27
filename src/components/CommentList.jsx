import { Carousel } from "react-bootstrap";
import { Component } from "react";

import SingleComment from "./SingleComment";

const CommentList = ({ commentsToShow }) => (
  <div className="comment-section">
    <h4>Recent comments</h4>

    <Carousel>
      {commentsToShow.map((comment) => (
        <Carousel.Item key={comment._id} className="d-block">
          <Carousel.Caption>
            <p>dsfhsdfhsfh</p>
          </Carousel.Caption>
        </Carousel.Item>

        // <SingleComment comment={comment} key={comment._id} />
      ))}
    </Carousel>
  </div>
);
export default CommentList;
