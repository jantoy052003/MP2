import collageBG from '../assets/netflix-collage.jpg'
import Logo from '../assets/MP2-logo.png'
import { Form, Button, Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import '../style/Login.css'

const Login = () => {
  const initialForm = {
    email: "",
    password: "",
  };

  const [formState, setFormState] = useState(initialForm);
  const { email, password } = formState;
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  }

  const onChange = (e) => {
    const { name, value} = e.target;
  
    setFormState({...formState, [name]: value});
  };


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className='login-container d-flex justify-content-center'>
      <img src={collageBG} alt="" />
      <div id='header-1' className='d-flex w-100'>
        <img src={Logo} alt="Logo" className='mt-3' />
      </div>
      <div id='login-form' className='d-flex flex-column justify-content-center border border-secondary rounded-4'>
        <Form className='px-5'>
          <h3 id='sign-in' className='p-1 mb-5'>Sign In</h3>
          <Form.Group className="mb-3">
            <Form.Control 
              id='input-email' 
              type="email" 
              placeholder="Email"
              name='email'
              required
              value={email}
              onChange={onChange} 
              />
            </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Control 
            id='input-password' 
            type="password" 
            placeholder="Password"
            name='password'
            required
            value={password}
            onChange={onChange}
             />
          </Form.Group>
          <Form.Group className="mb-3 text-white" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button href='/home' className='w-100' variant="primary" type="submit">
            Sign In
          </Button>
        </Form>
        <div className='d-flex justify-content-center mt-5'>
          <Form.Text id="passwordHelpBlock" muted>
            Don't have an account? <span id='sign-up' className='fw-bold' onClick={handleShow}>Sign up now.</span>
          </Form.Text>
          <Modal id={"signup-modal"} show={show} onHide={handleClose}>
            <Modal.Body closeButton>
              <Form className='pt-5'>
                <h3 id='sign-in' className='p-1 mb-5'>Sign Up</h3>
                <Form.Group className="mb-3">
                  <Form.Control 
                    id='input-email' 
                    type="email" 
                    placeholder="Email"
                    name='email'
                    required
                    value={email}
                    onChange={onChange} 
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Control 
                    id='input-password' 
                    type="password" 
                    placeholder="Password"
                    name='password'
                    required
                    value={password}
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3 text-white" controlId="formBasicCheckbox">
                </Form.Group>
                <Button href='/home' className='w-100 mt-5 mb-5' variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Modal.Body>
          </Modal>`
        </div>
      </div>
    </div>
  )
}

export default Login
