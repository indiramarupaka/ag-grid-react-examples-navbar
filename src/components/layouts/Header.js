import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "./Header.css";
class Header extends React.Component {
  render() {
    return (
      <div className="head">
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" sticky="top">
          <Navbar.Brand href="#home">PSD MANAGEMENT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink
                exact
                className="nav-link"
                activeClassName="text-danger"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="text-danger"
                to="/about"
              >

              CaseStatus
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="text-danger"
                to="/delete"
              >
                ABout Us
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="text-danger"
                to="/contact"
              >
                Contact Us
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="text-danger"
                to="/excel-export"
              >
                {/* Excel Export
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="text-danger"
                to="/landing"
              > */}
                
                {/* Delete Exp
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="text-danger"
                to="/news"
              >
                News API*/}
              </NavLink> 
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;
