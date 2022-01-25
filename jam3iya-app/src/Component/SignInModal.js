import React, { useState } from 'react';
import jam3yaStore from '../Stores/jam3yaStore';
import {Form, Modal, Button} from "react-bootstrap"
import authStore from '../Stores/authStore';

function SignInModal() {
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
        authStore.signInMethod(user)
        console.log(user);
        handleClose();
    }
  return (
    
    <>
      <Button className="" variant="primary" onClick={handleShow}>
        Sign In
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Dash Bil App!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        

        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control onChange={handleChange} type="text" placeholder="Shno User Name Malik?" />
    <Form.Text className="text-muted">

    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={handleChange} type="password" placeholder="7i6 passwordik, yalla!" />
  </Form.Group>

  <Button onClick={handleSubmit} variant="primary" type="submit">
    Yalla wedni!
  </Button>
</Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit} >
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );


}

export default SignInModal;