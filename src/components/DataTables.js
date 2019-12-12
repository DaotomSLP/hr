import React from "react";
import DataTable from "react-data-table-component";
import Forms from "./Forms";
import firebases from "../firebase";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const columns = [
  {
    name: "ລາຍການ",
    selector: "name",
    sortable: true
  },
  {
    name: "ຈຳນວນເງິນ :",
    selector: "price",
    sortable: true,
    right: true
  },
  {
    name: "ວັນທີ່ :",
    selector: "date",
    sortable: true,
    right: true
  }
];
var id = [];

const DataTables = props => {
  const showID = state => {
    id = state.selectedRows;
  };

  const deleteRow = () => {
    if (id.length > 0) {
      var amount = 0;
      var idd = "";
      id.map(index => {
        firebases
          .firestore()
          .collection(props.coll)
          .doc(index.id)
          .delete()
          .then((amount += index.price))
          .catch(function(error) {
            console.error("Error removing document: ", error);
          });
      });
      firebases
        .firestore()
        .collection("Budget")
        .onSnapshot(snapshot => {
          let budget = snapshot.docs.map(doc => ({
            ...doc.data()
          }));
          amount -= budget.map(m => {
            return m.price;
          });
          idd = budget.map(n => {
            return n.id;
          });
        });

      firebases.firestore().runTransaction(transaction => {
        transaction
          .get(
            firebases
              .firestore()
              .collection("Budget")
              .docs(idd)
          )
          .then(sfDoc => {
            transaction.update(
              firebases
                .firestore()
                .collection("Budget")
                .docs(idd),
              { total: amount }
            );
          });
      });
      // wait for update
      alert("Delete success fully!!");
    } else {
      alert("ກະລຸນາເລືອກລາຍການທີ່ຈະລົບ");
    }
  };
  return (
    <div>
      <DataTable
        title={props.name}
        columns={columns}
        data={props.data}
        defaultSortField="title"
        pagination
        selectableRows
        onSelectedRowsChange={showID}
      />
      <Button onClick={deleteRow} className="m-2 float-right bg-danger">
        ລົບ
        <FontAwesomeIcon icon={faTrashAlt} className="ml-2 " />
      </Button>
    </div>
  );
};

export default DataTables;
