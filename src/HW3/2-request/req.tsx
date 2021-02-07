import React from "react";

interface Prop {
  items: number[];
}

let _isMounted = true;

export class MyComponent extends React.Component<Prop> {
  constructor(props: Prop) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          if (_isMounted) {
            this.setState({
              items: result,
            });
          }
        },
        (error) => {
          this.setState({
            error,
          });
        }
      );
  }

  componentWillUnmount() {
    _isMounted = false;
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
