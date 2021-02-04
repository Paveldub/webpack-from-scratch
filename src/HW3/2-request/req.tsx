import React from "react";

interface Prop {
  url: string;
  dataArr: number[];
}

export class MyComponent extends React.Component<null, Prop> {
  constructor() {
    super(null);
    this.state = {
      dataArr: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          dataArr: data.dataArr,
        });
      });
  }

  render() {
    return <h1>text</h1>;
  }
}
