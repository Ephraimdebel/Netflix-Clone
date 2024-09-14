import { Navbar, Nav, Container } from 'react-bootstrap';
import netflix_logo from "../../assets/images/netflix_Logo_PMS.png";

import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./header.css"
import { useEffect, useState } from 'react';
function Header() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);
  console.log(show)
  return (
    // <div className='header_outer_container '>
    <div className=" fixed-top">
      <Navbar expand="lg"  className={`nav ${show && "nav__black"} `}>
        <Container >
          <Navbar.Brand>
            <img src={netflix_logo} alt="Netflix logo" width="100"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: 'white' }}/>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link style={{ color: 'white' }}>Home</Nav.Link>
              <Nav.Link style={{ color: 'white' }}>TV Shows</Nav.Link>
              <Nav.Link style={{ color: 'white' }}>Movies</Nav.Link>
              <Nav.Link style={{ color: 'white' }}>Latest</Nav.Link>
              <Nav.Link style={{ color: 'white' }}>My List</Nav.Link>
              <Nav.Link style={{ color: 'white' }}>Browse by Language</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link><SearchIcon style={{ color: 'white' }} /></Nav.Link>
              <Nav.Link><NotificationsNoneIcon style={{ color: 'white' }} /></Nav.Link>
              <Nav.Link><AccountBoxIcon style={{ color: 'white' }} /></Nav.Link>
              <Nav.Link><ArrowDropDownIcon style={{ color: 'white' }} /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header