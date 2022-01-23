import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
function NavBar() {
  let d = Date();
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand className="brand">3a6ny "Your" Flosik</Navbar.Brand>
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              {/* if he sing in or up <Nav.Link href="#features">Logout</Nav.Link>
              <input
                className="brandInput"
                placeholder="dawir jam3iya bsir3a"
              /><p>show how many jam3iya you are in + the sum of all comintment<p>*/}

              <Nav.Link>Rules</Nav.Link>
            </Nav>
          </Container>
          <div style={{ color: "white" }}>{d}</div>
        </Navbar>
      </>
    </div>
  );
}

export default NavBar;
