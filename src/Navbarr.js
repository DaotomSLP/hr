import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbarr = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <NavLink exact to="/" className="navbar-brand">
          IBudget
        </NavLink>
        <Nav>
          <NavLink to="/payment" className="nav-link nav-item">
            ລາຍຈ່າຍ
          </NavLink>
          <NavLink to="/income" className="nav-link nav-item">
            ເຫຼືອໃນບັນຊີ
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navbarr;
