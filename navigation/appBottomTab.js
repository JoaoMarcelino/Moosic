import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeView from "../screens_home/homeView";
import Search from "../screens_home/search";
import Vault from "../screens_home/vault";
import Profile from "../screens_home/profile";
import AddMusic from "../screens_home/addMusic";
import AddAlbum from "../screens_home/addAlbum";
import VaultStack from "../navigation/vaultStack";
import Icon from "react-native-vector-icons/FontAwesome";
import ProfileStack from "../navigation/profileStack";
const Tab = createMaterialTopTabNavigator();

const AppBottomTab = (context) => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      initialRouteName="Home"
      shifting={false}
      tabBarOptions={{
        indicatorStyle: { backgroundColor: "#55D9C1" },
        activeTintColor: "#55D9C1",
        inactiveTintColor: "#989898",
        showIcon: true,
        iconStyle: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          top: 6,
        },
        labelStyle: { fontSize: 12 },
        tabStyle: { height: 50 },
        style: { backgroundColor: "#151515" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeView}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon size={20} color={color} name={"home"} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        initialParams={context.route.params}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon size={20} color={color} name={"search"} />
          ),
        }}
      />
      <Tab.Screen
        name="Vault"
        component={VaultStack}
        initialParams={context.route.params}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon size={20} color={color} name={"headphones"} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon size={20} color={color} name={"user"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppBottomTab;
