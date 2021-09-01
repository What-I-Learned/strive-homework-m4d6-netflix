import React from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import MovieSegment from "./MovieSegment";

class NavigationBar extends React.Component {
  state = {
    search: false,
    query: "",
  };

  search = (e) => {
    e.preventDefault();
    this.setState({
      query: this.state.query,
      search: true,
    });
  };

  render() {
    return (
      <>
        <header>
          <Navbar sticky="top" bg="dark" expand="lg">
            <Link to="/">
              <Navbar.Brand>Navbar scroll</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Link to="/">
                  <div
                    className={
                      this.props.location.pathname === "/"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Home
                  </div>
                </Link>
                <Link to="/series">
                  <div
                    className={
                      this.props.location.pathname === "/series"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Series
                  </div>
                </Link>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <Form className="d-flex" onSubmit={this.search}>
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                  value={this.state.query}
                  onChange={(e) =>
                    this.setState({
                      ...this.state,
                      query: e.target.value,
                      // search: false,
                    })
                  }
                />
                <Button variant="outline-success" type="Submit">
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
          {this.state.query.length > 0 && (
            <MovieSegment
              title={"Search Results"}
              name={this.state.query.toLowerCase().split(" ").join("+")}
            />
          )}
        </header>
      </>
    );
  }
}
export default withRouter(NavigationBar);
