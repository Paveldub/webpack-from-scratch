// import React from "react";

// interface BtnProp {
//   content: string;
// }

// export class Button extends React.Component<BtnProp> {
//   constructor(props: BtnProp) {
//     super(props);
//     this.state = {
//       content: "",
//     };
//   }

//   btnText(children) {
//     this.setState((state) => {
//       content: state.children;
//     });
//   }

//   render() {
//     const btnText = ["50x40", "60x40", "70x40"];

//     const { content } = this.props;
//     {
//       btnText.map((item) => {
//         <button style={item === this.state.content ? { color: "red" } : null}>
//           {content}
//         </button>;
//       });
//     }
//     return <></>;
//   }
// }
