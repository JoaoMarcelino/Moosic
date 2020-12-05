import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeView from "../screens_home/homeView";
import Search from "../screens_home/search";
import Vault from "../screens_home/vault";
import Profile from "../screens_home/profile";
import AddMusic from "../screens_home/addMusic";

const Tab = createMaterialBottomTabNavigator();

const AppBottomTab = (context) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen
        name="Search"
        component={Search}
        initialParams={context.route.params}
      />
      <Tab.Screen name="Vault" component={Vault} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen
        name="Add Music"
        component={AddMusic}
        initialParams={context.route.params}
      />
    </Tab.Navigator>
  );
};

export default AppBottomTab;
