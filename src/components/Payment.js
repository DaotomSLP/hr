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
        const newPay = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
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
  const { register, handleSubmit, setValue, reset } = useForm();

  return (
    <Card className="mt-3 shadow" variant="">
      <Forms
        name="ລາຍການລາຍຈ່າຍ"
        price="ລາຄາ"
        register={register}
        handleSubmit={handleSubmit}
        setValue={setValue}
        coll="Payment"
      />
      <DataTables coll="Payment" name="ລາຍຈ່າຍ" data={data} />
    </Card>
  );
};

export default Payment;
