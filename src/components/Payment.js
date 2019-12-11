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
          ...doc.data()
        }));
        setPay(newPay);
      });
  }, []);
  return Pay;
};

const Payment = () => {
  const data = usePay().map(index => ({
    name: index.name,
    price: index.price,
    date: index.date.toDate().toLocaleDateString()
  }));
  const { register, handleSubmit, setValue, reset } = useForm();
  const [modal, setModal] = useState(false);
  const Submit = values => {
    var date = new Date();
    firebases
      .firestore()
      .collection("Payment")
      .add({ ...values, date })
      .then(() => {
        alert("ບັນທຶກສຳເລັດ");
        reset({
          name: "",
          price: ""
        });
      });
  };
  return (
    <Card className="mt-3 shadow" variant="">
      <Forms
        name="ລາຍການລາຍຈ່າຍ"
        price="ລາຄາ"
        register={register}
        handleSubmit={handleSubmit}
        Submit={Submit}
        modal={modal}
        setValue={setValue}
      />
      <DataTables name="ລາຍຈ່າຍ" data={data} />
    </Card>
  );
};

export default Payment;
