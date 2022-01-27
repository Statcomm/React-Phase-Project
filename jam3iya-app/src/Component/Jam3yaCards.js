import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";
import jam3yaStore from "../Stores/Jam3yastore";
import { Container } from "react-bootstrap";
import moment from "moment";
// import bootstrap from 'bootstrap';

const Jam3yaCards = ({ jam3yainfo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const jam3yaProps = jam3yainfo;

  const handleDelete = (event) => {
    event.preventDefault();
    jam3yaStore.deleteJam3ya(jam3yainfo._id);
    closeModal();
    console.log(jam3yaProps.slug);
  };
  return (
<Card className="cards" className="card:hover" style={{ width: '18rem' }}>
  <Card.Img  variant="top" src={jam3yaProps.image} />
  <Card.Body >
    <Card.Title>{jam3yaProps.title}</Card.Title>
  </Card.Body>
  <ListGroup className="list-group-flush" >
    <ListGroupItem >Monthly Contribution: {jam3yaProps.amount}  </ListGroupItem>
    <ListGroupItem >Maximum Members: {jam3yaProps.users.length} / {jam3yaProps.limit} </ListGroupItem>
    <ListGroupItem >Jam3ya Dates: {moment(jam3yainfo.startDate).format(`DD/MM/YYYY`)} - {moment(jam3yainfo.endDate).format(`DD/MM/YYYY`)} </ListGroupItem>
  </ListGroup>
  <Card.Body >
    
  <Link to={`/jam3yalist/${jam3yaProps.slug}`}> <Button className="otherButton"> View Jam3ya </Button> </Link>
    <Button className="otherButton"> View {jam3yaProps.author.username}'s Profile </Button>
    
  </Card.Body>
</Card>
  );
};

export default Jam3yaCards;







{/* <> 
<Link to={`/jam3yalist/${jam3yaProps.slug}`}>
  <div className="card">
    <Container className="cardColor">
      <img className="card" alt={jam3yaProps.title} src={jam3yaProps.image} />
      <h1>{jam3yaProps.title}</h1>
      <p>Limit: {jam3yaProps.limit}</p>
      <p>Start Date: {jam3yaProps.startDate}</p>
      <p>End Date: {jam3yaProps.endDate}</p>
      <Button className="delete" className="buttonD" onClick={handleDelete}>
        Delete
      </Button>
      <Button className="delete" className="buttonU" onClick={openModal}>
        Update
      </Button>
    </Container>
  </div>
</Link>
</> */}


//   return <div style={{ maxHeight: '30vh', marginTop: '10vh' }}>

// <Card className="text-start" style={{ width: '16rem', margin: `2rem`, padding:`1rem` }}>
//   <Card.Img variant="top" src={jam3yainfo.image} style={{height: `100%`}}/>
//   <Card.Body>
//     <Card.Title>{jam3yainfo.title}</Card.Title>
//     <Card.Text>
//     Duration: {moment(jam3yainfo.startDate).format(`DD/MM/YYYY`)} - {moment(jam3yainfo.endDate).format(`DD/MM/YYYY`)}
//     </Card.Text>
//   </Card.Body>
//   <ListGroup className="list-group-flush">
//     <ListGroupItem>Jam3ya limit: {jam3yainfo.limit}. Amount: {jam3yainfo.amount} </ListGroupItem>
//   </ListGroup>
//   <Card.Body>
//     <Card.Link href="#">Join Jam3ya</Card.Link>
//     <Card.Link href="#">Arra3y {jam3yainfo.author.username}</Card.Link>

//   </Card.Body>
// </Card>

// import React from 'react';
// import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
// import jam3yaStore from '../Stores/Jam3yastore';
// import moment from 'moment';
// import bootstrap from 'bootstrap';

// function Jam3yaCards({jam3yainfo}) {
//   return <div style={{ maxHeight: '30vh', marginTop: '10vh' }}>

// <Card className="text-start" style={{ width: '16rem', margin: `2rem`, padding:`1rem` }}>
//   <Card.Img variant="top" src={jam3yainfo.image} style={{height: `100%`}}/>
//   <Card.Body>
//     <Card.Title>{jam3yainfo.title}</Card.Title>
//     <Card.Text>
//     Duration: {moment(jam3yainfo.startDate).format(`DD/MM/YYYY`)} - {moment(jam3yainfo.endDate).format(`DD/MM/YYYY`)}
//     </Card.Text>
//   </Card.Body>
//   <ListGroup className="list-group-flush">
//     <ListGroupItem>Jam3ya limit: {jam3yainfo.limit}. Amount: {jam3yainfo.amount} </ListGroupItem>
//   </ListGroup>
//   <Card.Body>
//     <Card.Link href="#">Join Jam3ya</Card.Link>
//     <Card.Link href="#">Arra3y {jam3yainfo.author.username}</Card.Link>
//   </Card.Body>
// </Card>

//   </div>;
// }

// export default Jam3yaCards;
// export default observer (Jam3yaCards);
