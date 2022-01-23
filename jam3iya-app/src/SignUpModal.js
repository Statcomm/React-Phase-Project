import React, { useState } from 'react';

function SignUpModal(props) {
    const [user, setUser] = useState({
        username: "", email: "", password: "" 
    })
    const handleChange = (e)=>{ setUser({...user, [e.target.name]: e.target.value})}
    const handleSubmit = (e)=>{
        e.preventDefault()
        //call the jam3iya store thing .signIn(user)
        props.closeModal();
    }
  return (

    <Modal
    show={props.isOpen}
    onHide={props.closeModal}>
        <Modal.Header closeButton>
            <Modal.Title>SignIn</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} name="username" placeholder="User Name"/>
                <input type="password" onChange={handleChange} name="password" placeholder="Password"/>
                <input type="text" onChange={handleChange} name="email" placeholder="Email"/>
            </Form>
        </Modal.Body>
    </Modal>
  )
}

export default SignUpModal;
