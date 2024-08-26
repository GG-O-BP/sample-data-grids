// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import { invoke } from "@tauri-apps/api/core";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
  { id: 1, libraryName: 'Hello', npmDownload: 2094192, feature: 'React Table', price: 0, note: 'React Table' },
  { id: 2, libraryName: 'DataGridPro', npmDownload: 2094192, feature: 'React Table', price: 0, note: 'React Table' },
  { id: 3, libraryName: 'MUI', npmDownload: 2094192, feature: 'React Table', price: 0, note: 'React Table' },
];

const columns: GridColDef[] = [
  { field: 'libraryName', headerName: '라이브러리 이름', width: 150 },
  { field: 'npmDownload', headerName: 'npm 다운로드 수', width: 150 },
  { field: 'feature', headerName: '기능', width: 150 },
  { field: 'price', headerName: '가격', width: 150 },
  { field: 'note', headerName: '비고', width: 150 },
];

export default function Muix() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
