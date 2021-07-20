import React, { Component } from "react";
import Header from "./Header";

class Layout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <>
        <Header />
        {this.props.children}
      </>
    );
  }
}
export default Layout;
