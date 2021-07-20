import React, { Component } from "react";

class DeleteButton extends React.Component {
  buttonClicked = (e) => {
    let deletedRow = this.props.node.data;
    e.gridApi.updateRowData({ remove: [deletedRow] });
  };

  render() {
    return (
      <span>
        <button onClick={this.buttonClicked}>X</button>
      </span>
    );
  }
}
export default DeleteButton;
