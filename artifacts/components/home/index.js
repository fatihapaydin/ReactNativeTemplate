import React, { Component } from "react";
import { Image, View, StatusBar } from "react-native";
import { Container, Button, H3, Text } from "native-base";
import styles from "./styles";
const launchscreenBg = require("../../../img/launchscreen-bg.png");
const launchscreenLogo = require("../../../img/logo-kitchen-sink.png");
class Home extends Component {
    render() {
        return (React.createElement(Container, null,
            React.createElement(StatusBar, { barStyle: "light-content" }),
            React.createElement(Image, { source: launchscreenBg, style: styles.imageContainer },
                React.createElement(View, { style: styles.logoContainer },
                    React.createElement(Image, { source: launchscreenLogo, style: styles.logo })),
                React.createElement(View, { style: {
                        alignItems: "center",
                        marginBottom: 50,
                        backgroundColor: "transparent",
                    } },
                    React.createElement(H3, { style: styles.text }, "App to showcase"),
                    React.createElement(View, { style: { marginTop: 8 } }),
                    React.createElement(H3, { style: styles.text }, "NativeBase components"),
                    React.createElement(View, { style: { marginTop: 8 } })),
                React.createElement(View, { style: { marginBottom: 80 } },
                    React.createElement(Button, { style: { backgroundColor: "#6FAF98", alignSelf: "center" }, onPress: () => this.props.navigation.navigate("DrawerOpen") },
                        React.createElement(Text, null, "Lets Go!"))))));
    }
}
export default Home;
//# sourceMappingURL=index.js.map