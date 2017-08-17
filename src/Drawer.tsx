import React from "react";
import { DrawerNavigator } from "react-navigation";
import AnaSayfa from "./Sayfalar/AnaSayfa";
import IkinciSayfa from "./Sayfalar/IkinciSayfa";
import UcuncuSayfa from "./Sayfalar/UcuncuSayfa";
import SideBar from "./components/sidebar";
import Home from "./components/home";


const DrawerExample = DrawerNavigator(
  {
    AnaSayfa: { screen: AnaSayfa },
    IkinciSayfa: { screen: IkinciSayfa },
    UcuncuSayfa: { screen: UcuncuSayfa },
    Home: { screen: Home }
  },
  {
    initialRouteName: "Home",
    drawerWidth: 350,
    drawerPosition: 'left',
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default DrawerExample;
