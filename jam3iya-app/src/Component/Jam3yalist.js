import React from 'react';
import { observer } from 'mobx-react-lite';
import jam3yaStore from '../Stores/Jam3yastore';
import Jam3yaCards from './Jam3yaCards';
import { useState } from 'react';
import { Card, ListGroup, ListGroupItem, Container, Row, Col } from "react-bootstrap";

function Jam3yalist() {

  const [jam3yaQuery, setjam3yaQuery] = useState("");

  const jam3yaList = jam3yaStore.jam3ya.filter((jam3ya) =>
  jam3ya.title.toLowerCase().includes(jam3yaQuery.toLowerCase())
  ).map((jam3ya) => <Jam3yaCards jam3yainfo={jam3ya} />);
  
  return <div > <input className="inputSearch"
        className="inputSearch"
        placeholder="Dawir Jam3yaat"
        onChange={(e) => setjam3yaQuery(e.target.value)}
      />
          <Container className='listDesign'> 

   

  {jam3yaList}

</Container>
  </div>;
}

export default observer (Jam3yalist);
