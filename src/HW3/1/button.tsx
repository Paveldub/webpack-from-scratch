import React from "react";
import { MainTitleComponet } from "./digit-contaier";

interface Prop {
  count: number;
}

const colors: string[] = ["red", "yellow", "blue", "green", "purple", "pink"];

export class ClickCounter extends React.Component<null, Prop> {
  constructor() {
    super(null);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    const { count } = this.state;
    const color = colors[Math.floor(Math.random() * colors.length)];
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
