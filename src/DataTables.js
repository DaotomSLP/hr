import React from "react";
import DataTable from "react-data-table-component";

const data = [
  { id: 1, name: "Conan the Barbarian", date: "1982", price: "10000" },
  { id: 2, name: "Conan the Barbarian", date: "1982", price: "10000" },
  { id: 2, name: "Conan the Barbarian", date: "1982", price: "10000" }
];
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

const DataTables = () => {
  return (
    <DataTable
      title="ລາຍຈ່າຍ"
      columns={columns}
      data={data}
      defaultSortField="title"
      pagination
      selectableRows
    />
  );
};

export default DataTables;
