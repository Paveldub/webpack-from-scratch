import React from "react";

interface Prop {
  url: string;
  dataArr: number[];
}

export class MyComponent extends React.Component<null, Prop> {
  constructor() {
    super(null);
    this.state = {
      url: "https://jsonplaceholder.typicode.com/users",
      dataArr: [],
    };
  }

  componentDidMount() {
    const { url, dataArr } = this.state;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          dataArr: data.dataArr,
        });
      });
  }

  render() {
    return <h1>text</h1>;
  }
}
