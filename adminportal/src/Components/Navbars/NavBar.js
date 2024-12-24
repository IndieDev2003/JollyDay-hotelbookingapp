import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="shadow-sm px-5 py-2">
      <Navbar.Brand as={NavLink} to="/" className="font-weight-bold">
        Make-Holyday
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-between">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/" exact className="nav-link px-3">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/create-listing" className="nav-link px-3">
            Create Listing
          </Nav.Link>
          <Nav.Link as={NavLink} to="/view-listings" className="nav-link px-3">
            View Listings
          </Nav.Link>
          <NavDropdown title="Manage" id="basic-nav-dropdown">
            <NavDropdown.Item as={NavLink} to="/manage-bookings">
              Manage Bookings
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/my-profile">
              My Profile
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/login" className="nav-link px-3">
            Login
          </Nav.Link>
          <Nav.Link as={NavLink} to="/signup" className="nav-link px-3">
            Join us!
          </Nav.Link>
          <Nav.Link as={NavLink} to="/logout" className="nav-link px-3">
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
