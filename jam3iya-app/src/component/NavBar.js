import React, {useState} from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";  
// import {Button} from "react-bootstrap"


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
              <Nav.Link href="#home">Home</Nav.Link>
               {/* <Nav.Link onClick={()=>{ setSignUpIsOpen(!signUpIsOpen) }}>SignUp</Nav.Link> */}
               {/* <SignUpModal show={SignupIsOpen}/> */}
               {/* <Nav.Link onClick={()=>setSignInIsOpen(true)}>SignIn</Nav.Link> */}
               {/* <SignInModal show={SigninIsOpen}/> */}
              {/* <input
                className="brandInput"
                placeholder="dawir jam3iya bsir3a"
              /><p>show how many jam3iya you are in + the sum of all comintment<p>*/} 
              {/* <Button onClick={()=>{ setSignUpIsOpen(!signUpIsOpen) }}>Sign Up</Button> 
               <Button onClick={()=>setSignInIsOpen(true)}>Sign In</Button> */}
             

              <Nav.Link>Rules</Nav.Link>
              <SignUpModal isOpen={signUpIsOpen}/>
              <SignInModal isOpen={signInIsOpen}/>
            </Nav>
          </Container>
          <div style={{ color: "white" }}>{d}</div>
        </Navbar>
      </>
    </div>
  );
}

export default NavBar;
