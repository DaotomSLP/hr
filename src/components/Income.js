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
      .collection("Income")
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
const Page = () => {
  const data = usePay().map(index => ({
    id: index.id,
    name: index.name,
    price: index.amount,
    date: index.date.toDate().toLocaleDateString()
  }));
  const { register, handleSubmit } = useForm();
  const [modal, setModal] = useState(false);
  const Submit = values => {
    console.log(values);
    setModal(false);
  };
  return (
    <div>
      <Card className="mt-3 shadow-sm" variant="">
        <Forms
          name="ລາຍການລາຍຮັບ"
          price="ຈຳນວນເງິນ"
          register={register}
          handleSubmit={handleSubmit}
          Submit={Submit}
          modal={modal}
        />
        <DataTables name="ລາຍຮັບ" data={data} />
      </Card>
    </div>
  );
};

export default Page;
