import React from "react";
import { Nav, Navbar, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

const Navbarr = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <NavLink exact to="/" className="navbar-brand">
          <Card className="bg-white p-1 d-inline text-dark">
            <FontAwesomeIcon icon={faWallet} className="mr-2" />
            || iBudget
          </Card>
        </NavLink>
        <Nav>
          <NavLink to="/payment" className="nav-link nav-item">
            ລາຍຈ່າຍ
          </NavLink>
          <NavLink to="/income" className="nav-link nav-item">
            ລາຍຮັບ
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navbarr;
