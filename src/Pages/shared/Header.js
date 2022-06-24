import React from "react"
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const Header = () => {
  const { user, logOut } = useAuth()
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg">
        <Container>
          <Navbar.Brand href="#home">Car Mechanic</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/home#exparts">
              Experts
            </Nav.Link>
            <Nav.Link as={Link} to="/home#services">
              Services
            </Nav.Link>
            {user?.email ? (
              <Button variant="light">Log Out</Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
