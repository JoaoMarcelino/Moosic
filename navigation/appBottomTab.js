import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeView from "../screens_home/homeView";
import Search from "../screens_home/search";
import Vault from "../screens_home/vault";
import Profile from "../screens_home/profile";
import AddMusic from "../screens_home/addMusic";
import AddAlbum from "../screens_home/addAlbum";
import VaultStack from "../navigation/vaultStack";

const Tab = createMaterialBottomTabNavigator();

const AppBottomTab = (context) => {
  return (
    <Tab.Navigator
      activeColor="#55D9C1"
      inactiveColor="#989898"
      shifting={false}
      barStyle={{ backgroundColor: "#151515", height: 50 }}
    >
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen
        name="Search"
        component={Search}
        initialParams={context.route.params}
      />
      <Tab.Screen
        name="Vault"
        component={VaultStack}
        initialParams={context.route.params}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default AppBottomTab;
