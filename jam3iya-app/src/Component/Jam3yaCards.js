import React from 'react';
import { Link } from "react-router-dom";


const Jam3yaCards = (props) => {
  const jam3yaProps = props.jam3yaProps;
  return (
    <Link to={`/jam3yalist/${jam3yaProps.slug}`}>
      <div className="card">
        <img alt={jam3yaProps.title} src={jam3yaProps.image}/>
        <p>Jam3ya Name: {jam3yaProps.title}</p>
        <p>Limit: {jam3yaProps.limit}</p>
        <p>Start Date: {jam3yaProps.startDate}</p>
        <p>End Date: {jam3yaProps.endDate}</p>
      </div>
    </Link>
  )
};

export default Jam3yaCards;





























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
