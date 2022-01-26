import React, { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

import { observer } from "mobx-react-lite";
import authStore from "../Stores/authStore";

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
              <Nav.Link>Rules</Nav.Link>
            </Nav>
            <>
              {" "}
              {authStore.user ? (
                <>
                  <button onClick={authStore.logout}>logout</button>
                </>
              ) : (
                <p> </p>
              )}
            </>
          </Container>
          <div style={{ color: "white" }}>{d}</div>
        </Navbar>
      </>
    </div>
  );
}

export default observer(NavBar);
