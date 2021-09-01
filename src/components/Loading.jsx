import { Spinner, Row } from "react-bootstrap";

const Loading = () => (
  <Row className="align-items-center justify-content-center">
    <Spinner animation="border" variant="success" />
  </Row>
);

export default Loading;
