import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import React, { useState } from "react";
import jam3yaStore from '../Stores/Jam3yastore';

function UpdateJam3yaModal(props) {
 

  const [jam3ya, setJam3ya] = useState({
    _id: props.jam3ya._id,
    title: props.jam3ya.title,
    image: props.jam3ya.image,
    amount: props.jam3ya.amount,
    limit: props.jam3ya.limit,
    startDate: props.jam3ya.startDate,
    endDate: props.jam3ya.endDate,
  });
  console.log(props.jam3ya._id)
  const handleChange = (event) => {
    setJam3ya({ ...jam3ya, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
  
    event.preventDefault();
    jam3yaStore.updateJam3ya(jam3ya, jam3ya.id);
    props.closeModal();
  };
  return (

    <>
    

    <Modal centered show={props.isOpen} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title> Update Jam3ya </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>

          <InputGroup>
            <InputGroup.Text>Title</InputGroup.Text>
            <Form.Control
              value={jam3ya.title}
              type="text"
              name="title"
              onChange={handleChange}
            />
          </InputGroup>

          <br />

          <InputGroup>
            <InputGroup.Text>Image</InputGroup.Text>
            <Form.Control
              value={jam3ya.image}
              type="text"
              name="image"
              onChange={handleChange}
            />
          </InputGroup>

          <br />

          <InputGroup>
            <InputGroup.Text>Amount</InputGroup.Text>
            <Form.Control
              type="number"
              name="amount"
              onChange={handleChange}
              value={jam3ya.amount}
            />
          </InputGroup>

          <br />

          <InputGroup>
            <InputGroup.Text>Limit</InputGroup.Text>
            <Form.Control
              value={jam3ya.limit}
              type="number"
              name="limit"
              onChange={handleChange}
            />
          </InputGroup>

      
          <br />

          <InputGroup>
            <InputGroup.Text>Start Date</InputGroup.Text>
            <Form.Control
              value={jam3ya.startDate}
              type="date"
              name="startDate"
              onChange={handleChange}
            />
          </InputGroup>

          <br />

          <InputGroup>
            <InputGroup.Text>End Date</InputGroup.Text>
            <Form.Control
              value={jam3ya.endDate}
              type="date"
              name="endDate"
              onChange={handleChange}
            />
          </InputGroup>

          <br />


<br />
<Button variant="primary" type="submit">
  Change Jam3ya
</Button>
</Form>
      </Modal.Body>
    </Modal>
    </>
  );
}
export default UpdateJam3yaModal;
