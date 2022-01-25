import React, {useState} from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";  
import jam3yaStore from "../Stores/Jam3yastore";



function NavBar() {
  const [signUpIsOpen, setSignUpIsOpen] = useState(false);
  const [signInIsOpen, setSignInIsOpen] = useState(false);
  let d = Date();
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand className="brand">3a6ny "Your" Flosik</Navbar.Brand>
          <Container>
            <Nav className="me-auto">
              
              <SignUpModal isOpen={signUpIsOpen}/>
              <SignInModal isOpen={signInIsOpen}/>
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
