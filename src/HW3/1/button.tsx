import React from "react";
import { MainTitleComponet } from "./digit-contaier";

interface Prop {
  count: number;
}

interface BtnColor {
  btnColor: string[];
}

const colors = ["red", "yellow", "blue", "green", "purple", "pink"];
const randomColor = colors[Math.floor(Math.random() * colors.length)];

export class ClickCounter extends React.Component<Prop, BtnColor> {
  constructor(props: Prop) {
    super(props);
    this.state = {
      count: 0,
      btnColor: [],
    };
  }

  shouldComponentUpdate(nextProps: Prop, nextState: BtnColor) {
    return (
      this.state.count !== nextState.count ||
      nextProps.btnColor !== this.state.btnColor
    );
  }

  handleClick = () => {
    const { count, btnColor } = this.state;

    this.setState((state) => {
      return {
        count: state.count + 1,
        btnColor: randomColor,
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
