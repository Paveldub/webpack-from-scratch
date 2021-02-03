import React, { Component } from "react";

export class Block extends React.Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  render() {
    return <button onClick={this.handleClick}>{this.state.count}</button>;
  }
}
