import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import authStore from "../Stores/authStore";

function NavBar() {
  let d = Date();

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="brand">Ayami3 Flosik</Navbar.Brand>

        <Container>
          <Nav className="me-auto">
            <Nav.Link>
              {" "}
              <NavLink to="/">Home</NavLink>{" "}
            </Nav.Link>
          </Nav>
          <>
            {authStore.user ? (
              <>
                <button className="buttonL" onClick={authStore.logout}>
                  logout
                </button>
              </>
            ) : (
              <p> </p>
            )}
          </>
        </Container>
        <div style={{ color: "white" }}>{d}</div>
      </Navbar>
    </div>
  );
}
export default observer(NavBar);
