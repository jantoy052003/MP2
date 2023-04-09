import { Nav, Navbar, Container, Form, Button } from 'react-bootstrap';
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
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/home"><img src={Logo} alt="Logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '200px' }}
              navbarScroll
            >
              <Nav.Link id='header-nav' href="/home">Home</Nav.Link>
              <Nav.Link id='header-nav' href="/popular">Popular</Nav.Link>
              <Nav.Link id='header-nav' href="/newreleases">New Releases</Nav.Link>
              <Nav.Link id='header-nav' href="/upcomingmovies">Upcoming Movies</Nav.Link>
              <Nav.Link id='header-nav' href="/mylist">My List</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
