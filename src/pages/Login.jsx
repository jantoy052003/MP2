import collageBG from '../assets/netflix-collage.jpg'
import Logo from '../assets/MP2-logo.png'
import { Form, Button } from 'react-bootstrap'
import '../style/Login.css'

const Login = () => {
  return (
    <div className='login-container d-flex justify-content-center'>
      <img src={collageBG} alt="" />
      <div id='header-1' className='d-flex w-100'>
        <img src={Logo} alt="Logo" className='mt-3' />
      </div>
      <div id='login-form' className='d-flex flex-column justify-content-center border border-secondary rounded-4'>
        <Form className='px-5'>
          <h3 id='sign-in' className='p-1 mb-5'>Sign In</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control id='input-text' type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control id='input-text' type="password" placeholder="Password" />
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
            Don't have an account? <span id='sign-up' className='fw-bold'>Sign up now.</span>
          </Form.Text>
        </div>
      </div>
    </div>
  )
}

export default Login
