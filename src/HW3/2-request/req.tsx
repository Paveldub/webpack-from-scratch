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
      .then((data) =>
        data.forEach((item) => {
          console.log(item);
          this.setState({
            dataArr.push(item)
          })
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
