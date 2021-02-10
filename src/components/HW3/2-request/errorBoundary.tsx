import React, { Component, ReactNode } from "react";

export interface Props {
  children: ReactNode;
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong!!!</h1>;
    }

    return this.props.children;
  }
}
