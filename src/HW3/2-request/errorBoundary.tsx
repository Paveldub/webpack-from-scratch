import React from "react";

interface Props {
  hasError: boolean;
  error: null;
  info: null;
}

export class ErrorBoundary extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      info: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    logComponentStackToMyService(info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Oops, something went wrong...</h1>
          <p>The error: {this.state.error.toString()}</p>
          <p>Where it occured: {this.state.info.componentStack}</p>
        </div>
      );
    }
    return this.props.children;
  }
}
