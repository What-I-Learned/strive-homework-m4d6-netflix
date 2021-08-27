import { Carousel } from "react-bootstrap";

const SingleComment = ({ comment }) => (
  <Carousel.Item className="comment-carousel-item">
    <Carousel.Caption>{comment.comment}</Carousel.Caption>
  </Carousel.Item>
);
export default SingleComment;
