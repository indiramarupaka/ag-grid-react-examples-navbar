import React from "react";
// import DeleteButton from "../pages/DeleteButton";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
// class ButtonRenderer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.btnClickedHandler = this.btnClickedHandler.bind(this);
//   }
//   btnClickedHandler() {
//     this.props.clicked(this.props);
//   }
//   clkDelete = (params) => {
//     alert("delete clicked");
//     console.log(params);
//   };
//   render() {
//     return <button onClick={() => this.btnClickedHandler}>Delete</button>;
//   }
// }
class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          field: "athlete",
          minWidth: 50,
          cellRendererFramework: (params) => (
            <div>
              <button onClick={() => this.clkDelete(params)}>Delete</button>
            </div>
          )
        },
        {
          field: "athlete",
          minWidth: 150
        },
        {
          field: "age",
          maxWidth: 90
        },
        {
          field: "country",
          minWidth: 150
        },
        {
          field: "year",
          maxWidth: 90
        },
        {
          field: "date",
          minWidth: 150
        },
        {
          field: "sport",
          minWidth: 150
        },
        { field: "gold" },
        { field: "silver" },
        { field: "bronze" },
        { field: "total" }
      ],
      defaultColDef: {
        flex: 1,
        minWidth: 100
      },
      frameworkComponents: {
        // buttonRenderer: ButtonRenderer
      },
      rowData: null
    };
  }
  clkDelete = (params) => {
    this.props.history.push("/");
  };
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    const updateData = (data) => {
      this.setState({ rowData: data });
    };

    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then((resp) => resp.json())
      .then((data) => updateData(data));
  };
  componentDidMount() {}
  btnClickHandle = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <div>
          <h2>Delete button demo.</h2>
          <button onClick={this.btnClickHandle}>Home</button>
        </div>
        <div>
          <div
            style={{
              height: "500px",
              width: "100%"
            }}
          >
            <AgGridReact
              columnDefs={this.state.columnDefs}
              rowData={this.state.rowData}
              onGridReady={this.onGridReady}
              frameworkComponents={this.state.frameworkComponents}
            />
          </div>
        </div>
      </>
    );
  }
}
export default Delete;
