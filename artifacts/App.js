import React from "react";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";
import Drawer from "./Drawer";
import AnaSayfa from "./Sayfalar/AnaSayfa";
import IkinciSayfa from "./Sayfalar/IkinciSayfa";
import UcuncuSayfa from "./Sayfalar/UcuncuSayfa";
const AppNavigator = StackNavigator({
    Drawer: { screen: Drawer },
    AnaSayfa: { screen: AnaSayfa },
    IkinciSayfa: { screen: IkinciSayfa },
    UcuncuSayfa: { screen: UcuncuSayfa }
}, {
    initialRouteName: "Drawer",
    headerMode: "none"
});
export default () => React.createElement(Root, null,
    React.createElement(AppNavigator, null));
//# sourceMappingURL=App.js.map