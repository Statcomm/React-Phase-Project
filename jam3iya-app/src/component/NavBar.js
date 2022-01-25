import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import jam3yaStore from "../Stores/Jam3yastore";
function NavBar() {
  let d = Date();
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand className="brand">3a6ny "Your" Flosik</Navbar.Brand>
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link><Nav.Link>Rules</Nav.Link>
              {jam3yaStore.user ?<> <button>Logout</button>  </>:<><button>sign in</button> <button>sign up</button>  
            </> }

              
            </Nav>
          </Container>
          <div style={{ color: "white" }}>{d}</div>
        </Navbar>
      </>
    </div>
  );
}

export default NavBar;
