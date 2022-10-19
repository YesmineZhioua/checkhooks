import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../navbar.css';


function NavBar() {
    return (
        <Navbar className='navbar' bg="light" expand="lg">
            <Container fluid>
                icon mivies!!!
                <Navbar.Brand href="#">Movies Yass</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Movies</Nav.Link>
                        <Nav.Link href="#action2">Tv Shows</Nav.Link>
                        <Nav.Link href="#action2">Top Movies</Nav.Link>
                        <NavDropdown title="Genre" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Advanture
                            </NavDropdown.Item>
                          
                            <NavDropdown.Item href="#action5">
                                Comdey
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                                Horror
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                                Romance
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                    <Form className="d-flex">
                       icon utilisateur !!!
                        <Button variant="outline-success">Login/Register</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;