import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <Card className="mt-3 shadow" variant="">
      <Card.Header>
        <FontAwesomeIcon icon={faWallet} className="mr-3" />
        <h3 className="d-inline">2000000 ກີບ</h3>
        <Link to="/income">
          <FontAwesomeIcon icon={faPlusCircle} className="fa-2x float-right" />
        </Link>
      </Card.Header>
      <Card.Body>
        <h4 className="d-inline">ຍອດຄົງເຫຼືອ</h4>
      </Card.Body>
    </Card>
  );
}
