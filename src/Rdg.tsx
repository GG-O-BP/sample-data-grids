// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import { invoke } from "@tauri-apps/api/core";
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';

const columns = [
  { key: 'libraryName', name: '라이브러리 이름' },
  { key: 'npmDownload', name: 'npm 다운로드 수' },
  { key: 'feature', name: '기능' },
  { key: 'price', name: '가격' },
  { key: 'note', name: '비고' },
];

const rows = [
  { id: 0, libraryName: 'Hello', npmDownload: 2094192, feature: 'React Table', price: 0, note: 'React Table' },
  { id: 1, libraryName: 'DataGridPro', npmDownload: 2094192, feature: 'React Table', price: 0, note: 'React Table' },
  { id: 2, libraryName: 'MUI', npmDownload: 2094192, feature: 'React Table', price: 0, note: 'React Table' },
];

export default function Ag() {
  return <DataGrid columns={columns} rows={rows} />;
}
