import React, { Component } from "react";
import { MainTitleComponet } from "./digit-contaier";

interface Prop {
  count: number;
}

export class ClickCounter extends React.Component<null, Prop> {
  constructor() {
    super(null);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    const count = this.state.count;
    this.setState({ count: count + 1 });
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Click me</button>
        <MainTitleComponet digitElem={this.state.count}></MainTitleComponet>
      </>
    );
  }
}
