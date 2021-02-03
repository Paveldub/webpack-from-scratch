import React from "react";

interface Prop {
  count: number;
}

export class CounterBtn extends React.Component<Prop> {
  constructor(props: Prop) {
    super(props);
    this.state = { count: 0 };
  }

  eventClick = () => {
    const { count } = this.state;
    this.setState(() => ({ count: count + 1 }));
  };

  render() {
    return (
      <>
        <button onClick={this.eventClick}>Click me!</button>
        <div>{this.state.count}</div>
      </>
    );
  }
}
