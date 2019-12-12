import React from "react";
import { Nav, Navbar, Card } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const Navbarr = () => {
  return (
    <div>
      <Link to="/" className="text-dark">
        <div className="pl-3 header-card pt-3 pb-3 ">
          <FontAwesomeIcon icon={faWallet} className="mr-2 fa-3x" />
          <h1 className="d-inline text-bold"> || iBudget</h1>
        </div>
      </Link>
      <Navbar bg="dark" variant="dark">
        <Nav>
          <NavLink exact to="/" className="nav-link nav-item">
            ຄົງເຫຼືອ
          </NavLink>
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
