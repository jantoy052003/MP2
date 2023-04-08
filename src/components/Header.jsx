import { Nav, Navbar, Container } from 'react-bootstrap';
import { useState } from 'react';
import Logo from '../assets/MP2-logo.png'

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 50) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <div id='header' className={navbar ? 'headertp glass' : 'headertp'}>
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <Nav className='fw-bold' activeKey="/home">
        <Nav.Item>
          <Nav.Link id='header-nav' href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id='header-nav' href="/popular">Popular</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id='header-nav' href="/newreleases">New Releases</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id='header-nav' href="/upcomingmovies">Upcoming Movies</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id='header-nav' href="/mylist">My List</Nav.Link>
        </Nav.Item>
      </Nav>  
    </div>
  )
}

export default Header
