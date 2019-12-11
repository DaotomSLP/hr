import React, { useState, useEffect } from "react";
import DataTables from "./DataTables";
import Forms from "./Forms";
import { Card } from "react-bootstrap";
import useForm from "react-hook-form";
import firebases from "../firebase";

const usePay = () => {
  const [Pay, setPay] = useState([]);

  useEffect(() => {
    firebases
      .firestore()
      .collection("Payment")
      .onSnapshot(snapshot => {
        console.log(snapshot);
        const newPay = snapshot.docs.map(doc => ({
          // id: doc.data.id
          ...doc.data()
          // date: doc.date
        }));
        setPay(newPay);
      });
  }, []);
  return Pay;
};

const Payment = () => {
  const data = usePay().map(index => ({
    id: index.id,
    name: index.name,
    price: index.price,
    date: index.date.toDate().toLocaleDateString()
  }));
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
