import '../style/Welcome.css'
import collageBG from '../assets/netflix-collage.jpg'
import Logo from '../assets/MP2-logo.png'
import { Form, Button } from 'react-bootstrap'

const Signup = () => {
  return (
    <div className='welcome-container'>
        <img src={collageBG} alt="" />
        <div id='header-1' className='d-flex mx-auto'>
            <img id='welcome-logo' src={Logo} alt="Logo" className='mt-3' />
            <Button href='/login' id='btn' className='py-2'>Sign In</Button>
        </div>
        <div id='welcome-info' className='d-flex align-items-center justify-content-center'> 
            <div className='d-flex flex-column text-white'>
                <h1 id='unli' className='text-center'>UNLIMITED MOVIES</h1>
                <h4 className='text-center'>Watch Anywhere. Cancel Anytime.</h4>
                <h6>Ready to watch? Enter your email to create or renew membership.</h6>
            </div>
            <form className='d-flex mt-3 w-100 justify-content-center align-items-center' action="">
                <div id='input-container'>
                    <Form.Group>
                        <Form.Control id='input-text' className="py-3" type="email" placeholder="Email" />
                    </Form.Group>
                </div>
                <Button href='/login' className="py-3">GET STARTED</Button>
            </form>
        </div>
    </div>
  )
}

export default Signup
