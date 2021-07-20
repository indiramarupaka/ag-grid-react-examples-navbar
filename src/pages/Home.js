import React from "react";
import { AgGridReact } from "ag-grid-react";
// import { AllCommunityModules } from "ag-grid-community";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import ButtonC from "./button";

import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { MenuModule } from "@ag-grid-enterprise/menu";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";
import { RangeSelectionModule } from "@ag-grid-enterprise/range-selection";
import { ClipboardModule } from "@ag-grid-enterprise/clipboard";
class Home extends React.Component {
  
  constructor(props) {
    
    super(props);
    this.state = {
      columnDefs: [
        {
          field: "year" ,checkboxSelection: true,
          cellRenderer: "buttonRenderer"
        },
        { field: "athlete" },
        { field: "year" ,editable: true},
        { field: "gold",editable: true },
        { field: "silver",editable: true },
        { field: "bronze" ,editable: true}
      ],
      frameworkComponents: {
        // buttonRenderer: this.ButtonRenderer
        buttonRenderer: ButtonC
      },
      defaultColDef: {
        
        sortable: true,
        flex: 1,
        minWidth: 80,
        filter: true,
        resizable: true,
        pagination:true,
        checkBoxSelection:true

      },
      rowData: null,
      modules: [
        ClientSideRowModelModule,
        MenuModule,
        ExcelExportModule,
        RangeSelectionModule,
        ClipboardModule
      ]
    };
  }
  ButtonRenderer = (params) => {
    return <button onClick={this.buttonClicked}></button>;
  };
  buttonClicked = (params) => {
    alert("clicked for -");
  };

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ rowData: data });
      });
  };

  getContextMenuItems = (params) => {
    var result = [
      {
        name: "Alert " + params.value,
        action: function () {
          window.alert("Alerting about " + params.value);
        },
        cssClasses: ["redFont", "bold"]
      },
      {
        name: "Always Disabled",
        disabled: true,
        tooltip:
          "Very long tooltip, did I mention that I am very long, well I am! Long!  Very Long!"
      },
      {
        name: "Country",
        subMenu: [
          {
            name: "Ireland",
            action: function () {
              console.log("Ireland was pressed");
            },
            icon: createFlagImg("ie")
          },
          {
            name: "UK",
            action: function () {
              console.log("UK was pressed");
            },
            icon: createFlagImg("gb")
          },
          {
            name: "France",
            action: function () {
              console.log("France was pressed");
            },
            icon: createFlagImg("fr")
          }
        ]
      },
      "separator",
      {
        name: "Windows",
        shortcut: "Alt + W",
        action: function () {
          console.log("Windows Item Selected");
        },
        icon:
          '<img src="https://www.ag-grid.com/example-assets/skills/windows.png" />'
      },
      "separator",
      {
        name: "Checked",
        checked: true,
        action: function () {
          console.log("Checked Selected");
        },
        icon:
          '<img src="https://www.ag-grid.com/example-assets/skills/mac.png"/>'
      },
      "copy",
      "copyWithHeaders",
      "separator",
      "chartRange",
      {
        name: "Export All",
        subMenu: [
          {
            name: "CSV Export",
            action: () => {
              params.context.gridApi.exportDataAsCsv();
            }
          },
          {
            name: "Excel Export (.xlsx)",
            action: () => {
              params.context.gridApi.exportDataAsExcel();
            }
          },
          {
            name: "Excel Export (.xml)",
            action: () => {
              params.context.gridApi.exportDataAsExcel({ exportMode: "xml" });
            }
          }
        ]
      }
    ];
    return result;
  };
  onBtExport = () => {
    gridApi.exportDataAsExcel();
  }
  
  render() {
    return (
      <div style={{ width: "100%", height: "100vh" }}>
        
        <div
          id="myGrid"
          style={{
            height: "100%",
            width: "100%"
          }}
          className="ag-theme-alpine"
        >
          <button
            onClick={() => onBtExport()}
            style={{ marginBottom: '5px', fontWeight: 'bold' }}
          >
            Export to Excel
          </button>
          <AgGridReact
            modules={this.state.modules}
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            rowData={this.state.rowData}
            frameworkComponents={this.state.frameworkComponents}
            onGridReady={this.onGridReady}
            getContextMenuItems={this.getContextMenuItems}
            enableRangeSelection={true}
            allowContextMenuWithControlKey={true}
            pagination={true}
             paginationPageSize={50}

          />
        </div>
      </div>
    );
  }
}
function createFlagImg(flag) {
  return (
    '<img border="0" width="15" height="10" src="https://flags.fmcdn.net/data/flags/mini/' +
    flag +
    '.png"/>'
  );
}
export default Home;
