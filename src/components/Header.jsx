import Nav from 'react-bootstrap/Nav';
import Logo from '../assets/MP2-logo.png'

const Header = () => {
  return (
    <div id='header' className='d-flex align-items-center'>
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/popular">Popular</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/newreleases">New Releases</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/upcomingmovies">Upcoming Movies</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/mylist">My List</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default Header
