import React from "react";

interface Prop {
  error: string;
  dataArr: [];
  isLoaded: boolean;
}

export class MyComponent extends React.Component<null, Prop> {
  constructor() {
    super(null);
    this.state = {
      error: "",
      dataArr: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);
          this.setState({
            isLoaded: true,
            dataArr: data.dataArr,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: "ERROR",
          });
        }
      );
  }

  render() {
    const { error, isLoaded, dataArr } = this.state;
    if (error) {
      return <div>Ошибка: {error}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <ul>
          {dataArr.map((elem) => {
            <li key={elem.id}>
              {elem.name} - {elem.phone}
            </li>;
          })}
        </ul>
      );
    }
  }
}
