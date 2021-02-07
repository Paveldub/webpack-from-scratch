import React from "react";

interface Prop {
  items: number[];
  error: null;
  isLoading: boolean;
}

let _isMounted = true;

export class MyComponent extends React.Component<Prop> {
  constructor(props: Prop) {
    super(props);
    this.state = {
      items: [],
      error: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => {
        if (_isMounted) {
          this.setState({
            items: result,
            isLoading: false,
          });
        }
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  componentWillUnmount() {
    _isMounted = false;
  }

  render() {
    const { isLoading, items, error } = this.state;

    return (
      <>
        {error ? <p>{error.message}</p> : null}

        {!isLoading ? (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <span>
                  {item.name} - {item.phone} - {item.username} - {item.email}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <h3>... preloader...</h3>
        )}
      </>
    );
  }
}
