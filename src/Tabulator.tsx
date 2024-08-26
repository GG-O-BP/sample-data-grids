import 'react-tabulator/lib/styles.css';
import 'tabulator-tables/dist/css/tabulator.min.css';
import { ReactTabulator } from 'react-tabulator'
import { useRef, useEffect } from 'react';


export default function Tabulator() {
  const tableRef = useRef<HTMLDivElement>(null);

  const columns = [
    { title: "라이브러리 이름", field: "libraryName" },
    { title: "npm 다운로드 수", field: "npmDownload" },
    { title: "기능", field: "feature" },
    { title: "가격", field: "price" },
    { title: "비고", field: "note" },
  ];
  const data = [
    {id:1, libraryName:"Oli Bob", npmDownload:"12", feature:"red", price:"", note:""},
    {id:2, libraryName:"Mary May", npmDownload:"1", feature:"blue", price:"", note:"14/05/1982"},
  ];

  useEffect(() => {
    if (tableRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        if (tableRef.current) {
          tableRef.current.dispatchEvent(new Event('resize'));
        }
      });
      resizeObserver.observe(tableRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  return (
    <div ref={tableRef}>
      <ReactTabulator
        data={data}
        columns={columns}
        layout={"fitData"}
      />
    </div>
  );
}