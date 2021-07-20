import React, { Component } from "react";
import { Button } from "react-bootstrap";
export default class Buttonc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cellValue: Buttonc.getValueToDisplay(props)
    };
  }

  // update cellValue when the cell's props are updated
  static getDerivedStateFromProps(nextProps) {
    return {
      cellValue: Buttonc.getValueToDisplay(nextProps)
    };
  }

  buttonClicked() {
    alert(`${this.state.cellValue} medals won!`);
  }

  render() {
    return (
      <span>
        {/* <span>{this.state.cellValue}</span>&nbsp; */}
        <Button
          className="btn btn-secondary btn-sm"
          onClick={() => this.buttonClicked()}
        >
          Click
        </Button>
      </span>
    );
  }

  static getValueToDisplay(params) {
    return params.valueFormatted ? params.valueFormatted : params.value;
  }
}
