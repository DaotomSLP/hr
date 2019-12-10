import React from "react";
import DataTables from "./DataTables";
import Forms from "./Forms";
import { Card } from "react-bootstrap";

const Payment = () => {
  return (
    <Card className="mt-3 shadow-sm" variant="">
      <Forms name="ລາຍການລາຍຈ່າຍ" price="ລາຄາ" />
      <DataTables />
    </Card>
  );
};

export default Payment;
