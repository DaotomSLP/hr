import React, { useState } from "react";
import DataTables from "./DataTables";
import Forms from "./Forms";
import { Card } from "react-bootstrap";
import useForm from "react-hook-form";

const data = [
  { id: 1, name: "ເຂົ້າປຽກ", date: "1982", price: "10000" },
  { id: 2, name: "ເຝີ", date: "1982", price: "10000" },
  { id: 2, name: "ນ້ຳມັນລົດ", date: "1982", price: "10000" }
];

const Payment = () => {
  const { register, handleSubmit } = useForm();
  const [modal, setModal] = useState(false);
  const Submit = values => {
    console.log(values);
    setModal(false);
    console.log(modal);
  };
  return (
    <Card className="mt-3 shadow-sm" variant="">
      <Forms
        name="ລາຍການລາຍຈ່າຍ"
        price="ລາຄາ"
        register={register}
        handleSubmit={handleSubmit}
        Submit={Submit}
        modal={modal}
      />
      <DataTables name="ລາຍຈ່າຍ" data={data} />
    </Card>
  );
};

export default Payment;
