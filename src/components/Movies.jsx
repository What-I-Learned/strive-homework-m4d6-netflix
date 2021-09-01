import { Component } from "react";
import { Card, Row, Modal, Button } from "react-bootstrap";

class Movies extends Component {
  state = {
    comments: null,
  };
  render() {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            onClick={() =>
              this.setState({
                comments: this.props.mov,
              })
            }
            variant="top"
            src={this.props.mov.Poster}
          />
          <Card.Body>
            <Card.Title style={{ color: "#313438" }}>
              {this.props.mov.Title}
              <p>{this.props.mov.Year}</p>
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Row>
          {this.state.comments && (
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>{this.state.comments.Title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>{this.state.comments.Year}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
              </Modal.Footer>
            </Modal.Dialog>
          )}
        </Row>
      </>
    );
  }
}
export default Movies;
