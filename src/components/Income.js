import React from "react";
import DataTables from "./DataTables";
import Forms from "./Forms";
import { Card } from "react-bootstrap";

const data = [
  { id: 1, name: "salary 10", date: "1982", price: "10000" },
  { id: 2, name: "salary 11", date: "1982", price: "10000" },
  { id: 2, name: "salary 12", date: "1982", price: "10000" }
];
const Page = () => {
  return (
    <div>
      <Card className="mt-3 shadow-sm" variant="">
        <Forms name="ລາຍການລາຍຮັບ" price="ຈຳນວນເງິນ" />
        <DataTables name="ລາຍຮັບ" data={data} />
      </Card>
    </div>
  );
};

export default Page;
