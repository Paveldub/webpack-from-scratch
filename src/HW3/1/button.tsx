import React from "react";
import { MainTitleComponet } from "./digit-contaier";

interface Prop {
  count: number;
  colors: string[];
}

export class ClickCounter extends React.Component<null, Prop> {
  constructor() {
    super(null);
    this.state = {
      count: 0,
      colors: ["red", "yellow", "blue", "green", "purple", "pink"],
    };
  }

  handleClick = () => {
    const { colors } = this.state;
    const { count } = this.state;
    const color = colors[Math.floor(Math.random() * colors.length)];
    this.setState({ count: count + 1 });
    document.body.style.backgroundColor = color;
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
