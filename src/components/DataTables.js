import React from "react";
import DataTable from "react-data-table-component";
import Forms from "./Forms";

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

const DataTables = props => {
  return (
    <DataTable
      title={props.name}
      columns={columns}
      data={props.data}
      defaultSortField="title"
      pagination
      selectableRows
    />
  );
};

export default DataTables;
