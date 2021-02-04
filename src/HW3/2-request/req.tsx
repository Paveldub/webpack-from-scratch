import React from "react";

interface PropData {
  error: null;
  isLoaded: boolean;
  items: number[];
}

export class MyComponent extends React.Component<null, PropData> {
  constructor() {
    super(null);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    const { items } = this.state;
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) =>
        data.forEach((item) => {
          console.log(item);
          this.setState({
            items,
          });
        })
      );
  }

  render() {
    return <h1>text</h1>;
  }

  // render() {
  // const { error, isLoaded, items } = this.state;
  // if (error) {
  //   return <div>Ошибка: {error.message}</div>;
  // } else if (!isLoaded) {
  //   return <div>Загрузка...</div>;
  // } else {
  //   return (
  //     <ul>
  //       {items.map((item) => (
  //         <li key={item.id}>
  //           {item.title} {item.id}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }
  // }
}
