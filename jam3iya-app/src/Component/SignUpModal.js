import React, { useState } from 'react';

import {Form, Modal, Button} from "react-bootstrap"
import authStore from '../Stores/authStore';

function SignUpModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [user, setUser] = useState({
        username: "", email: "", password: "" 
    })       
    //  console.log(user);

    const handleChange = (e)=>{ setUser({...user, [e.target.name]: e.target.value})}
    const handleSubmit = (e)=>{
        // console.log(e);
        e.preventDefault()
        authStore.signUpMethod(user)
        // console.log(user);
        handleClose();
    }
  return (
    
    <>
      <Button variant="primary" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Yalla Desh Wiyana!</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" >
    <Form.Label>Email</Form.Label>
    <Form.Control onChange={handleChange} name="email" type="email" placeholder="Shinou Emailik?" />
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Username</Form.Label>
    <Form.Control onChange={handleChange} name="username" type="text" placeholder="Shtabi User Name Malik?" />
    <Form.Text className="text-muted">

    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={handleChange} name="password" type="password" placeholder="7i6 passwordik, yalla!" />
  </Form.Group>

  <Button variant="primary" type="submit">
    A Desh Wiyakoum!
  </Button>
</Form>


        </Modal.Body>
    
      </Modal>
    </>
  );


}

export default SignUpModal;
