import React, {useState} from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";  
import jam3yaStore from "../Stores/Jam3yastore";
import { observer } from 'mobx-react-lite';
 import { Link } from 'react-router-dom';




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
              
             
              
             <Nav.Link> <Link  to="/">Home</Link> </Nav.Link>
              <Nav.Link>Rules</Nav.Link>
              <Nav.Link  ><Link to="/jam3yalist">Jam3ya List</Link></Nav.Link>
              {jam3yaStore.user ?<> <button>Logout</button>  </>:<><SignInModal isOpen={signInIsOpen}/>  <SignUpModal isOpen={signUpIsOpen}/>  
            </> }

              
            </Nav>
          </Container>
          <div style={{ color: "white" }}>{d}</div>
        </Navbar>
      </>
    </div>
  );
}

export default observer(NavBar) ;
