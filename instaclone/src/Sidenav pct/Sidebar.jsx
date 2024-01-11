import React, { useState } from 'react';
import { Navbar, Nav, Button, Image } from 'react-bootstrap';
import { Avatar } from '@mui/material';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './Sidenav.css'; // Import your custom styles

function Sidenav() {
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth);
  };

  const handleSearch = () => {
    navigate('/Search');
  };

  const handleExplore = () => {
    navigate('/explore');
  };

  const handleCreate = () => {
    navigate('/create');
  };

  const handleReels = () => {
    navigate('/reels');
  };

  const handleMessages = () => {
    navigate('/message');
  };

  const handleNotification = () => {
    navigate('/notifications');
  };

  return (
    <div className="sidenav">
      <Navbar className="navbar" expand="lg" sticky="top">
        <Navbar.Brand href="#home">
          <Image
            className="side_logo"
            src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
            alt="Instagram Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto sidenav_buttons">
            <Nav.Link className="side_button" onClick={() => navigate('/')}>
              <HomeIcon />
              <span>Home</span>
            </Nav.Link>
            <Nav.Link className="side_button" onClick={handleSearch}>
              <SearchIcon />
              <span>Search</span>
            </Nav.Link>
            {/* Add other Nav.Link components for each button */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Your existing content goes here */}

      <div className="sidenav_more">
        <Button className="side_button">
          <MenuIcon />
          <span className="sidenav_buttontext">More</span>
        </Button>
      </div>
    </div>
  );
}

export default Sidenav;
