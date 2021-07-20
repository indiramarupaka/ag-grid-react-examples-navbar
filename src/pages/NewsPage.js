import React, { Component } from "react";
import { Button } from "react-bootstrap";
export default class NewsPage extends Component {
  constructor(props) {
    super(props);
  }

  buttonClicked() {
    alert(`${this.state.cellValue} medals won!`);
  }

  render() {
    return <span>news</span>;
  }
}
