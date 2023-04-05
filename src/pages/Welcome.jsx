import '../style/Welcome.css'
import collageBG from '../assets/netflix-collage.jpg'
import Logo from '../assets/MP2-logo.png'
import Button from 'react-bootstrap/Button';

const Signup = () => {
  return (
    <div className='welcome-container'>
        <img src={collageBG} alt="" />
        <div id='header-1' className='d-flex w-100'>
            <img src={Logo} alt="Logo" className='mt-3' />
            <Button id='btn' className='py-2 mt-5'>Sign In</Button>
        </div>
        <div className='d-flex align-items-center justify-content-center'> 
            <div className='d-flex flex-column text-white'>
                <h1 id='unli' className='text-center'>UNLIMITED MOVIES</h1>
                <h4 className='text-center'>Watch Anywhere. Cancel Anytime.</h4>
                <h6>Ready to watch? Enter your email to create or renew membership.</h6>
            </div>
            <form className='d-flex flex-column p-3 w-100' action="">
                <div className='d-flex justify-content-center'>
                    <input id='input-info' className='p-3'
                    type="email"
                    placeholder='Email Address'
                    name='email' 
                    />
                    <Button href='/login' className='py-3'>GET STARTED</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup
