import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeView from "../screens_home/homeView";
import Search from "../screens_home/search";
import Vault from "../screens_home/vault";
import Profile from "../screens_home/profile";

const Tab = createMaterialBottomTabNavigator();

const AppBottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Vault" component={Vault} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default AppBottomTab;
