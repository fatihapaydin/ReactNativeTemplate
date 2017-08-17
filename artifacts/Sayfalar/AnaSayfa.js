import React from "react";
import { Container, Header, Title, Content, Left, Right, Body, Text, Button, Icon } from "native-base";
import styles from "./styles";
export default class AnaSayfa extends React.Component {
    render() {
        return (React.createElement(Container, { style: styles.container },
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true, onPress: () => this.props.navigation.navigate("DrawerOpen") },
                        React.createElement(Icon, { name: "menu" }))),
                React.createElement(Body, null,
                    React.createElement(Title, null, "Arama Motoru")),
                React.createElement(Right, null)),
            React.createElement(Content, { padder: true },
                React.createElement(Text, null, "Ana Sayfa \u0130\u00E7eri\u011Fi"),
                React.createElement(Button, { onPress: () => this.props.navigation.navigate("IkinciSayfa") },
                    React.createElement(Text, null, "\u0130kinci Sayfaya"),
                    React.createElement(Right, null,
                        React.createElement(Icon, { name: "arrow-forward", style: { color: "#999" } }))))));
    }
}
//# sourceMappingURL=AnaSayfa.js.map