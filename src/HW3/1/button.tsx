import React from "react";
import { MainTitleComponet } from "./digit-contaier";
import { ButtonElem } from "./buttonElem";

interface PropCount {
  count: number;
}

interface PropStyle {
  btnColor: string;
}

const colors = ["red", "yellow", "blue", "green", "purple", "pink"];

export class ClickCounter extends React.Component<PropCount, PropStyle> {
  state = {
    count: 0,
    btnColor: "",
  };

  handleClick = () => {
    this.setState((state: any) => {
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
        <ButtonElem
          content={"click me"}
          increment={this.handleClick}
          style={{ backgroundColor: this.state.btnColor.toString() }}
        />
      </>
    );
  }
}
