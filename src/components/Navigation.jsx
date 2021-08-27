import { Component } from "react";
import {Navbar,Nav,Form,Button,FormControl,Dropdown,Row,Col,Container} from 'react-bootstrap'


class Navigation extends Component{
    render(){
        return(
            <div style={{backgroundColor: '#313438',height:'100vh'}}>
                <Container style={{color:'white'}} >
            <Navbar style={{color:'white'}}  bg="#313438" expand="lg">
            <Navbar.Brand href="#home"><img style={{width: "50px"}} src="https://1000marche.net/wp-content/uploads/2020/03/Netflix-logo.png" alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav  className="mr-auto">
                <Nav.Link style={{color: "white"}} href="#home">Home</Nav.Link>
                <Nav.Link style={{color: "white"}} href="#link">Tv shows</Nav.Link>
                <Nav.Link style={{color: "white"}} href="#home">Home</Nav.Link>
                <Nav.Link style={{color: "white"}} href="#link">Tv shows</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl style={{width: "80px"}} type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="#313438"><img style={{width: "40px"}} src="https://icon-library.com/images/web-icon-white/web-icon-white-14.jpg" alt="" /></Button>
                </Form>
                <Nav>
                <Nav.Link style={{color: "white"}} href="#deets">Kids</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    <img style={{width: "30px"}} src="https://www.pinclipart.com/picdir/middle/369-3699390_notification-png-notification-icon-png-free-clipart.png" alt="" />
                </Nav.Link>
                <Dropdown>
                <Dropdown.Toggle variant="#313438" id="dropdown-basic">
                    <img style={{width: "40px"}} src="https://lh3.googleusercontent.com/proxy/8tqXYyWovqWtPE01h5TJYbJOWS1gIrJKGEzyFPajX4iuQxyikzmw-IzGoLKxhU-X0tNQudHsGg0XUWaHFP1u5Veg8XSXS0OG4efS40XFXYtEfaoitFLUNx73" alt="" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            <Row>
                <Col lg={2}>
                    <h2 >Tv Shows</h2>
                    
                </Col>
                <Col lg={2}>
                <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                   Genres
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                    
                </Col>
            </Row>
            </Container>
            </div>
        )
    }
}
export default Navigation