import React, { useState } from "react";
import jam3yaStore from '../Stores/Jam3yastore';
import { useParams, Navigate } from 'react-router-dom';
import {Card, Button} from "react-bootstrap";
import moment from 'moment';
import { useNavigate } from "react-router-dom";


export default function Details (jam3ya) {
  const navigate  = useNavigate();

    const jam3yaSlug = useParams().jam3yaSlug;
    const jam3yaProps = jam3yaStore.jam3ya.find((e)=>e.slug===jam3yaSlug)
    console.log(jam3yaSlug);
    console.log(jam3yaProps);
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);
  
    const openModal = () => setIsOpen(true);

    const handleDelete = (event) => {
      event.preventDefault();
      jam3yaStore.deleteJam3ya(jam3yaProps._id);
      closeModal();
      alert("Successfully deleted!")
     navigate("/jam3yalist")
      
    };

  return (
<div> <center> 
<Card className="detailsCard" style={{ width: '80rem' }}>
  <Card.Img className="detailsImg" variant="top" src={jam3yaProps.image} />
  <Card.Body>
    <Card.Title>{jam3yaProps.title}</Card.Title>
    <Card.Text>
      <ul>
        <li>Creator: {jam3yaProps.author.username}</li>
        <li>Expected Monthly Contribution: {jam3yaProps.amount} KWD</li>
        <li>Jam3ya Members Limit: {jam3yaProps.users.length} / {jam3yaProps.limit}</li>
        <li>Jam3ya Duration: {moment(jam3yaProps.startDate).format(`DD/MM/YYYY`)} - {moment(jam3yaProps.endDate).format(`DD/MM/YYYY`)}</li>
        <li>Jam3ya Created On: {moment(jam3yaProps.created_at).format(`DD/MM/YYYY`)}</li>
        <li>Last Updated: {moment(jam3yaProps.updatedAt).add(3, `days`).calendar()}</li>
      </ul>
   
    </Card.Text>
    <Button className="allButton" variant="primary">Join Jam3ya</Button> &nbsp; &nbsp;
    <Button className="allButton" variant="primary">Message Jam3ya Group</Button> <p>

</p>
    <Button className="allButton" variant="primary">Update Jam3ya</Button> &nbsp;&nbsp;
    <Button className="buttonD" variant="primary" onClick={handleDelete}>Delete Jam3ya</Button>
  </Card.Body>
</Card>
</center>
</div>
  )
};


{/* <div className="single-service wow fadeInUp" data-wow-delay=".4s">
<center>
  <div className="wandWrapper" >
    <img src={jam3yaProps.image}
     alt=""
     style={{ height: "400px", width: "400px"}}/>

  </div>
</center>
<div className="content">

<p>Jam3ya Name: {jam3yaProps.title}</p>

<p>Jam3ya Limit: {jam3yaProps.limit}</p>
<p>Start Date: {jam3yaProps.startDate}</p>
<p>End Date: {jam3yaProps.endDate}</p>
  </div> 
</div> */}