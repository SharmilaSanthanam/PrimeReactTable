import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { SelectButton } from "primereact/selectbutton";
import { data } from "./table";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const Component = () => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [filterMode, setFilterMode] = useState("lenient");

  const getHeader = () => {
    return (
      <div className="flex justify-content-end">
        <div className="p-input-icon-left">
          <i className="pi pi-search"></i>
          <InputText
            type="search"
            onInput={(e) => setGlobalFilter(e.target.value)}
            placeholder="Global Search"
          />
        </div>
      </div>
    );
  };

  let header = getHeader();

  return (
    <div className="card">
      <div className="flex justify-content-center mb-4">
        <SelectButton
          value={filterMode}
          onChange={(e) => setFilterMode(e.value)}
        />
      </div>
      <DataTable
        value={data}
        showGridlines
        globalFilter={globalFilter}
        header={header}
        filterMode={filterMode}
        tableStyle={{ minWidth: "50rem" }}
        paginator
        rows={6}
      >
        <Column
          field="id"
          header="ID"
          filter
          filterPlaceholder="Filter by id"
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="name"
          header="Name"
          filter
          filterPlaceholder="Filter by name"
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="age"
          header="Age"
          filter
          filterPlaceholder="Filter by age"
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="place"
          header="Place"
          filter
          filterPlaceholder="Filter by place"
          sortable
          style={{ width: "25%" }}
        ></Column>
      </DataTable>
    </div>
  );
};

export default Component;
