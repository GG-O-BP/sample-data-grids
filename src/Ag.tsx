// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import { invoke } from "@tauri-apps/api/core";
import { useState } from "react";
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import { ColDef } from 'ag-grid-community';
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

export default function Ag() {
  const [rowData, setRowData] = useState([
    { libraryName: "Tesla", npmDownload: 64950, feature: "Model Y", price: 0, note: "React Table" },
    { libraryName: "Ford", npmDownload: 64950, feature: "Model Y", price: 0, note: "React Table" },
    { libraryName: "Toyota", npmDownload: 64950, feature: "Model Y", price: 0, note: "React Table" },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState<ColDef[]>([
    { field: "libraryName", headerName: "라이브러리 이름" },
    { field: "npmDownload", headerName: "npm 다운로드 수" },
    { field: "feature", headerName: "기능" },
    { field: "price", headerName: "가격" },
    { field: "note", headerName: "비고" },
  ]);

  return (
    // wrapping container with theme & size
    <div
      className="ag-theme-quartz" // applying the Data Grid theme
      style={{ height: 500 }} // the Data Grid will fill the size of the parent container
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
      />
    </div>
  )
}
