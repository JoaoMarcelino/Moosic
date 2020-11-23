import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import App from "../App";

const Tab = createMaterialBottomTabNavigator();

const AppBottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component="HomeScreen" />
    </Tab.Navigator>
  );
};

export default AppBottomTab;
