import React, { useState } from 'react';
import jam3yaStore from '../Stores/jam3yaStore';
import {Form, Modal, Button} from "react-bootstrap"
import authStore from '../Stores/authStore';

function SignUpModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [user, setUser] = useState({
        username: "", email: "", password: "" 
    })
    const handleChange = (e)=>{ setUser({...user, [e.target.name]: e.target.value})
console.log(e)}
    const handleSubmit = (e)=>{
        console.log(e);
        e.preventDefault()
        authStore.signUpMethod(user)
        console.log(user);
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


        <Form>

        <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control onChange={handleChange} type="email" placeholder="Shinou Emailik?" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control onChange={handleChange} type="text" placeholder="Shtabi User Name Malik?" />
    <Form.Text className="text-muted">

    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={handleChange} type="password" placeholder="7i6 passwordik, yalla!" />
  </Form.Group>

  <Button onClick={handleSubmit} variant="primary" type="submit">
    A Desh Wiyakoum!
  </Button>
</Form>

{/* 
        <Form >
           <input type="text" onChange={handleChange} name="username" placeholder="User Name"/>
            <input type="password" onChange={handleChange} name="password" placeholder="Password"/>
            <input type="text" onChange={handleChange} name="email" placeholder="Email"/>
        </Form> */}
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit} >
            Save Changes
          </Button> */}
        {/* </Modal.Footer> */}
      </Modal>
    </>
  );


}

export default SignUpModal;
