import React from "react";

interface Prop {
  items: number[];
}

export class MyComponent extends React.Component<Prop> {
  constructor(props: Prop) {
    super(props);
    this.state = {
      error: null,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            items: result,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        }
      );
  }

  render() {
    const { items } = this.state;

    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.phone}
          </li>
        ))}
      </ul>
    );
  }
}
