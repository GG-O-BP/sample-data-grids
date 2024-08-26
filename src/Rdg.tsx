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
  {
    id:0,
    libraryName:"@mui/x-data-grid",
    npmDownload:1090259,
    feature: "* 셀 내용 편집 :텍스트/셀렉트/날짜 선택 박스 (무료)\n* 로우, 컬럼 이동 가능 (프로)\n* single/multi select 기능 제공(row -무료, multirow - 프로, cell - 프리미엄)\n* sort/filter/grouping(프로/프리미엄) 기능 제공\n* 컬럼 병합 가능 (무료), 로우 병합 불가\n* csv 다운로드(무료) / 엑셀 다운로드 (프리미엄)\n* 스파크 라인 표출 기능(무료)",
    price:"* 무료 (MIT)\n* 프로 / 프리미엄 / 프리미엄 얼리버드 할인(~8/30)\n- 구매(기기당) : 540$ / 1,764$ / 1,332$ \n- 구독(월/기기당) : 15$ / 49$ / 37$\n* 연간 라이선스 경우 활성화를 계속하려면 갱신 필요\n* https://mui.com/pricing/",
    note:"* https://mui.com/x/react-data-grid/editing/",
  },
  {
    id:1,
    libraryName:"ag-grid",
    npmDownload:680981,
    feature:"* 셀 내용 편집 :텍스트/셀렉트 선택 박스 (무료)\n* 로우, 컬럼 이동 가능 (무료)\n* single/multi select 기능 제공(row, multirow - 무료, cell - 유료)\n* sort/filter(무료), grouping(유료) 기능 제공\n* csv 다운로드(무료) / 엑셀 다운로드 (유료)\n* 컬럼, 로우 병합 가능 (무료)\n* 스파크 라인 표출 기능(유료)",
    price:"* 무료 (MIT)\n* grid / gird, chart bundle\n- 구매(기기당) : 999$ / 1,498$\n* https://www.ag-grid.com/license-pricing/",
    note:"* https://www.ag-grid.com/react-data-grid/cell-editing/",
  },
  {
    id:2,
    libraryName:"ag-grid",
    npmDownload:680981,
    feature:"* 셀 내용 편집 :텍스트/셀렉트/날짜 선택 박스 (무료)\n* 로우, 컬럼 이동 가능 (무료)\n* single/multi select 기능 제공(row, multirow - 무료, cell - 유료)\n* sort/filter/grouping(무료) 기능 제공\n* 컬럼 병합 가능 (무료)\n* csv, 엑셀 다운로드(무료)\n* 스파크 라인 표출 기능(무료)",
    price:"* 무료 (MIT)",
    note:"* https://adazzle.github.io/react-data-grid/#/common-features",
  },
  {
    id:3,
    libraryName:"tabulator-tables",
    npmDownload:87442,
    feature:"* 셀 내용 편집 :텍스트/셀렉트/날짜 선택 박스 (무료)\n* 로우, 컬럼 이동 가능 (무료)\n* single/multi select 기능 제공(row, multirow, cell - 무료)\n* sort/filter/grouping(무료) 기능 제공\n* 컬럼,로우 병합 불가\n* csv, 엑셀 다운로드(무료)\n* 스파크 라인 표출 기능(무료)",
    price:"* 무료 (MIT)",
    note:"* https://tabulator.info/",
  },
];

export default function Ag() {
  return <DataGrid columns={columns} rows={rows} />;
}
