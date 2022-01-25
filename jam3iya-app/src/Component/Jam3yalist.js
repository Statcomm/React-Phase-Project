import React from 'react';
import { observer } from 'mobx-react-lite';
import jam3yaStore from '../Stores/Jam3yastore';
import Jam3yaCards from './Jam3yaCards';
import { useState } from 'react';
import { Container, SplitButton, Dropdown, Form } from "react-bootstrap";

function Jam3yalist() {

  const [jam3yaQuery, setjam3yaQuery] = useState("")

  const jam3yaList = jam3yaStore.jam3ya.filter((jam3ya) => 
  jam3ya.title.toLowerCase().includes(jam3yaQuery.toLowerCase())
  ).map((jam3ya) => <Jam3yaCards jam3yainfo={jam3ya} />);
  
  return <div > 
          <Container className='listDesign'> 

          <Form> <Form.Group className="mb-3">
    
    <Form.Select >
     
      <option >by Name</option>
      <option>by Amount</option>
      <option>by Starting Status</option>
    </Form.Select>
  </Form.Group>
  <Form.Group className="mb-3">

    <Form.Control   className="inputSearch"
        className="inputSearch"
        name = "title"
        placeholder="Dawir Jam3yaat"
        onChange={(e) => setjam3yaQuery(e.target.value)}  />
  </Form.Group>
 
</Form>

   

  {jam3yaList}

</Container>
  </div>;
}

export default observer (Jam3yalist);
