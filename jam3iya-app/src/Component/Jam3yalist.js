import React from "react";
import { observer } from "mobx-react-lite";
import jam3yaStore from "../Stores/Jam3yastore";
import Jam3yaCards from "./Jam3yaCards";
import { useState } from "react";
import { Container, SplitButton, Dropdown, Form } from "react-bootstrap";
import authStore from "../Stores/authStore";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

function Jam3yalist() {
  const [jam3yaQuery, setjam3yaQuery] = useState("");
  const [jam3yaAmount, setjam3yaAmount] = useState("");
  const [jam3yaDate, setjam3yaDate] = useState("");
  const signUpIsOpen = false;
  const signInIsOpen = false;
  const jam3yaList = jam3yaStore.jam3ya
    .filter((_jam3ya) => {
      if (jam3yaQuery === "") return true;
      else
        return _jam3ya.title.toLowerCase().includes(jam3yaQuery.toLowerCase());
    })
    .filter((_jam3ya) => {
      if (jam3yaAmount === "") return true;
      else return _jam3ya.amount === parseInt(jam3yaAmount);
    })
    .filter((_jam3ya) => {
      if (jam3yaDate === "") return true;
      else return _jam3ya.startDate >= jam3yaDate;
    })

    .map((_jam3ya) => <Jam3yaCards jam3yainfo={_jam3ya} />);

  return (
    <div>
      {authStore.user ? (
        <>
          <Container className="listDesign">
            <Form>
              <Form.Group className="mb-3">
                <label>Dawir Jam3yaat By:</label>
                <Form.Control
                  className="inputSearch"
                  placeholder="Name"
                  onChange={(e) => setjam3yaQuery(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  className="inputSearch"
                  type="number"
                  placeholder="Amount"
                  onChange={(e) => setjam3yaAmount(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  className="inputSearch"
                  type="date"
                  placeholder="Start Date"
                  onChange={(e) => setjam3yaDate(e.target.value)}
                />
              </Form.Group>
            </Form>

            {jam3yaList}
          </Container>
          ;
        </>
      ) : (
        <>
          <SignInModal isOpen={signInIsOpen} />
          <SignUpModal isOpen={signUpIsOpen} />
        </>
      )}
    </div>
  );
}
export default observer(Jam3yalist);
