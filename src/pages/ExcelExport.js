import React from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { MenuModule } from "@ag-grid-enterprise/menu";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";
import { ClipboardModule } from "@ag-grid-enterprise/clipboard";
import "@ag-grid-community/core/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-alpine.css";
class ExcelExport extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modules: [
        ClientSideRowModelModule,
        MenuModule,
        ExcelExportModule,
        ClipboardModule
      ],
      rowData: [
        { a: 1, b: 1, c: 1, d: 1, e: 1 },
        { a: 2, b: 2, c: 2, d: 2, e: 2 }
      ],
      columnDefs: [
        { field: "a" },
        { field: "b" },
        { field: "c" },
        { field: "d" },
        { field: "e" }
      ]
    };
  }
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };
  render() {
    return (
      <div style={{ width: "100%", height: "95vh" }}>
        <div
          id="myGrid"
          style={{
            height: "90vh",
            width: "100%"
          }}
          className="ag-theme-alpine"
        >
          <AgGridReact
            modules={this.state.modules}
            rowData={this.state.rowData}
            columnDefs={this.state.columnDefs}
            onGridReady={this.onGridReady}
          />
        </div>
      </div>
    );
  }
}
export default ExcelExport;
