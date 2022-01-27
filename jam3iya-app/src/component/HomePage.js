import React from "react";
import jam3yaStore from "../Stores/Jam3yastore";
import Jam3yaCards from "./Jam3yaCards";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";

function HomePage() {
  const [jam3yaQuery, setjam3yaQuery] = useState("");

  const jam3yaList = jam3yaStore.jam3ya
    .filter((_jam3ya) =>
      _jam3ya.title.toLowerCase().includes(jam3yaQuery.toLowerCase())
    )
    .map((_jam3ya) => <Jam3yaCards jam3yainfo={_jam3ya} />);

  return (
    <div>
      <Container className="listDesign">
        <Form>
          <Form.Group className="mb-3">
            <h2>What Jam3ya your looking for </h2>
            <Form.Control
              className="inputSearch"
              placeholder="Name"
              onChange={(e) => setjam3yaQuery(e.target.value)}
            />
          </Form.Group>
        </Form>

        {jam3yaList}
      </Container>
    </div>
  );
}

export default HomePage;
