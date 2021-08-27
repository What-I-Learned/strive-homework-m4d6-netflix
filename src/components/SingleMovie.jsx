import React from "react";

import LeaveComment from "./LeaveComment";
import CommentList from "./CommentList";

// + this.props.id

class SingleMovie extends React.Component {
  state = {
    comments: {
      comments: [],
    },
  };
  fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/tt3896198",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjk1ZTJkNTI2MjAwMTViNmRjOWQiLCJpYXQiOjE2Mjk5ODUyMzksImV4cCI6MTYzMTE5NDgzOX0.mS3Qwvrlsn7oJIK8hVVuKRbXkVR6kVchtAJ7C4UySkI",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        let comments = await response.json();
        this.setState({ comments: { comments: comments } });
        this.state.comments.comments.forEach((element) => {
          console.log(element.comment);
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount = async () => {
    this.fetchComments();
  };

  render() {
    return (
      <div
        className="single-movie-container"
        style={{
          backgroundImage: `linear-gradient(
        270deg,
        rgba(164, 164, 164, 0.13) 0%,
        rgba(0, 0, 0, 0.8883928571428571) 50%,
        rgba(0, 0, 0, 1) 65%
      ),
      url("https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABfHVUAAEhu-G5QHH31CutuqX0wBfTK4nzyJXSyUkXm13Stw-yFpmeMzfTkBcmlsWu_CHM-JNr2d2sjncwPLkqG968JMe.jpg?r=321")`,
        }}
      >
        <div className="single-movie-info">
          <h2 className="single-movie-title">Narcos</h2>
          <small className="single-movie-year">2018</small>
          <LeaveComment fetchComments={this.fetchComments} id={"tt3896198"} />
        </div>
        <CommentList
          // id={"tt3896198"}
          commentsToShow={this.state.comments.comments}
        />
      </div>
    );
  }
}
export default SingleMovie;
