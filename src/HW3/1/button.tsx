import React from "react";
import { MainTitleComponet } from "./digit-contaier";

interface Prop {
  count: number;
}

export class ClickCounter extends React.Component<Prop> {
  constructor(props: Prop) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    const { count } = this.state;
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };

  render() {
    return (
      <>
        <MainTitleComponet digitElem={this.state.count} />
        <button onClick={this.handleClick}>Click me</button>
      </>
    );
  }
}
