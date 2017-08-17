import React, { Component } from "react";
import { ProgressViewIOS } from "react-native";
export default class ProgressBarNB extends Component {
    render() {
        const getColor = () => {
            if (this.props.color) {
                return this.props.color;
            }
            else if (this.props.inverse) {
                return this.getTheme().inverseProgressColor;
            }
            return this.getTheme().defaultProgressColor;
        };
        return (React.createElement(ProgressViewIOS, { progress: this.props.progress ? this.props.progress / 100 : 0.5, progressTintColor: getColor() }));
    }
}
//# sourceMappingURL=ProgressBar.ios.js.map