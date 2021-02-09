import React from "react";
import { MainTitleComponet } from "./digit-contaier";
// import { randomBtnColor } from "./button.style";

interface Prop {
  count: number;
  btnColor: string[];
}

const colors = ["red", "yellow", "blue", "green", "purple", "pink"];

export class ClickCounter extends React.Component<Prop> {
  constructor(props: Prop) {
    super(props);
    this.state = {
      count: 0,
      btnColor: "",
    };
  }

  handleClick = () => {
    this.setState((state) => {
      return {
        count: state.count + 1,
        btnColor: colors[Math.floor(Math.random() * colors.length)],
      };
    });
  };

  render() {
    return (
      <>
        <MainTitleComponet digitElem={this.state.count} />

        <button
          onClick={this.handleClick}
          style={{ backgroundColor: this.state.btnColor.toString() }}
        >
          Click me
        </button>
      </>
    );
  }
}
