import React from "react";
import { Container, Header, Title, Content, Left, Right, Body, Text, Button, Icon } from "native-base";
import styles from "./styles";
export default class UcuncuSayfa extends React.Component {
    render() {
        return (React.createElement(Container, { style: styles.container },
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true, onPress: () => this.props.navigation.navigate("DrawerOpen") },
                        React.createElement(Icon, { name: "menu" }))),
                React.createElement(Body, null,
                    React.createElement(Title, null, "\u00DC\u00E7\u00FCnc\u00FC Sayfa Ba\u015Fl\u0131\u011F\u0131")),
                React.createElement(Right, null)),
            React.createElement(Content, { padder: true },
                React.createElement(Text, null, "\u00DC\u00E7\u00FCnc\u00FC Sayfa \u0130\u00E7eri\u011Fi"),
                React.createElement(Button, { onPress: () => this.props.navigation.navigate("AnaSayfa") },
                    React.createElement(Text, null, "Ana Sayfaya"),
                    React.createElement(Right, null,
                        React.createElement(Icon, { name: "arrow-forward", style: { color: "#999" } }))))));
    }
}
//# sourceMappingURL=UcuncuSayfa.js.map