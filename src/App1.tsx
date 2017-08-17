import React from "react";
import App from "./App";

interface IState {
  isReady: boolean;
}

export default class App1 extends React.Component<{}, IState> {
  constructor() {
    super();
    this.state = { isReady: false };
  }

  render() {
    return <App />;
  }
}
