import React, { useState } from 'react';
import {Form, Modal, Button} from "react-bootstrap"
import jam3yaStore from '../Stores/Jam3yastore';

function CreateJam3yaModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newJam3ya, setNewJam3ya] = useState({
    title: '',
    image: '',
    amount:``,
    limit:``,
    startDate:``,
    endDate:``,

  });


  const handleChange = (e)=>{ setNewJam3ya({...newJam3ya, [e.target.name]: e.target.value})}
  const handleSubmit = (e)=>{
      e.preventDefault()
     newJam3ya.amount=parseInt(newJam3ya.amount)
     newJam3ya.limit=parseInt(newJam3ya.limit)
    //  newJam3ya.startDate=//put the new state
      jam3yaStore.createJam3ya(newJam3ya)
      handleClose();
  }
return (
  
  <>
    <Button variant="primary" onClick={handleShow}>
      Create Jam3ya
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Khaansawi Jam3ya!</Modal.Title>
      </Modal.Header>
      <Modal.Body>

      <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" >
  <Form.Label>Jam3ya Ism</Form.Label>
  <Form.Control onChange={handleChange} name="title" type="text" placeholder="Ism Jam3yitk" />
</Form.Group>

<Form.Group className="mb-3" >
  <Form.Label>Sourra</Form.Label>
  <Form.Control onChange={handleChange} name="image" type="text" placeholder="7i6 Soura" />

</Form.Group>

<Form.Group className="mb-3" >
  <Form.Label>Tcham Flouss?</Form.Label>
  <Form.Control onChange={handleChange} name="amount" type="number" placeholder="Tcham tabi bil shahir?" />
</Form.Group>

<Form.Group className="mb-3" >
  <Form.Label>Tcham Nass?</Form.Label>
  <Form.Control onChange={handleChange} name="limit" type="number" placeholder="Tcham nass maximum?" />
</Form.Group>


<Form.Group className="mb-3" >
  <Form.Label>Mita Nabda?</Form.Label>
  <Form.Control onChange={handleChange} name="startDate" type="date" placeholder="Tarikh" />
</Form.Group>


<Form.Group className="mb-3" >
  <Form.Label>Mita Nkhalis?</Form.Label>
  <Form.Control onChange={handleChange} name="endDate" type="date" placeholder="Tarikh" />
</Form.Group>


<Button variant="primary" type="submit">
  Sawi Jam3ytii!
</Button>
</Form>
      </Modal.Body>
    </Modal>
  </>
);


}

export default CreateJam3yaModal;


// const [newJam3ya, setNewJam3ya] = useState({
//   title: '',
//   image: '',
//   amount:``,
//   limit:``,
//   startDate:``,
//   endDate:``,
//   description: '',
//   messages: [],
// });

// export default CreateJam3yaModal;
