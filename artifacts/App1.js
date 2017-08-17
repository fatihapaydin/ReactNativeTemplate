import React from "react";
import App from "./App";
export default class App1 extends React.Component {
    constructor() {
        super();
        this.state = { isReady: false };
    }
    render() {
        return React.createElement(App, null);
    }
}
//# sourceMappingURL=App1.js.map