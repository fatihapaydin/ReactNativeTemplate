import React, { Component } from "react";
import { Image } from "react-native";
import { Content, Text, List, ListItem, Icon, Container, Left, Right, Badge } from "native-base";
import styles from "./style";
const drawerCover = require("../../../img/drawer-cover.png");
const drawerImage = require("../../../img/logo-kitchen-sink.png");
const datas = [
    {
        name: "Ana Sayfa",
        route: "AnaSayfa",
        icon: "phone-portrait",
        bg: "#C5F442",
    },
    {
        name: "İkinci Sayfa",
        route: "IkinciSayfa",
        icon: "easel",
        bg: "#C5F442",
    },
    {
        name: "Üçüncü Sayfa",
        route: "UcuncuSayfa",
        icon: "phone-portrait",
        bg: "#477EEA",
        types: "8",
    },
    {
        name: "Home Sayfası",
        route: "Home",
        icon: "phone-portrait",
        bg: "#477EEA",
        types: "84",
    }
];
class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shadowOffsetWidth: 1,
            shadowRadius: 4,
        };
    }
    render() {
        return (React.createElement(Container, null,
            React.createElement(Content, { bounces: false, style: { flex: 1, backgroundColor: "#fff", top: -1 } },
                React.createElement(Image, { source: drawerCover, style: styles.drawerCover },
                    React.createElement(Image, { square: true, style: styles.drawerImage, source: drawerImage })),
                React.createElement(List, { dataArray: datas, renderRow: data => React.createElement(ListItem, { button: true, noBorder: true, onPress: () => this.props.navigation.navigate(data.route) },
                        React.createElement(Left, null,
                            React.createElement(Icon, { active: true, name: data.icon, style: { color: "#777", fontSize: 26, width: 30 } }),
                            React.createElement(Text, { style: styles.text }, data.name)),
                        data.types &&
                            React.createElement(Right, { style: { flex: 1 } },
                                React.createElement(Badge, { style: {
                                        borderRadius: 3,
                                        height: 25,
                                        width: 72,
                                        backgroundColor: data.bg,
                                    } },
                                    React.createElement(Text, { style: styles.badgeText }, `${data.types} Types`)))) }))));
    }
}
export default SideBar;
//# sourceMappingURL=index.js.map