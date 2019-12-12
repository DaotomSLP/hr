import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import firebases from "../firebase";

const useAmount = () => {
  const [amount, setAmount] = useState([]);
  useEffect(() => {
    firebases
      .firestore()
      .collection("Budget")
      .onSnapshot(snapshot => {
        const newAmount = snapshot.docs.map(doc => ({
          ...doc.data()
        }));
        setAmount(newAmount);
      });
  }, []);
  return amount;
};

const Home = () => {
  const data = useAmount();
  return (
    <Card className="mt-3 shadow" variant="">
      <Card.Header>
        <FontAwesomeIcon icon={faWallet} className="mr-3" />
        {data.map(val => {
          return <h3 className="d-inline">{val.total} ກີບ</h3>;
        })}
        <Link to="/income">
          <FontAwesomeIcon icon={faPlusCircle} className="fa-2x float-right" />
        </Link>
      </Card.Header>
      <Card.Body>
        <h4 className="d-inline">ຍອດຄົງເຫຼືອ</h4>
      </Card.Body>
    </Card>
  );
};
export default Home;
