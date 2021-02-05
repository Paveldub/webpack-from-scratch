import React from "react";

interface Prop {
  items: [];
  isLoaded: boolean;
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
          result.map((itemElem) => {
            this.setState({
              items: itemElem,
            });
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { items } = this.state;

    return (
      <ul>
        <li key={items.id}>
          {items.name} - {items.phone}
        </li>
      </ul>
    );
  }
}
