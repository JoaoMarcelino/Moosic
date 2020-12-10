import React, { useEffect, View } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Animated } from "react-native";

import Settings from "../screens_home/settings";
import ChangeProfileName from "../screens_home/changeProfileName";
import ChangePassword from "../screens_home/changePassword";
import Credits from "../screens_home/credits";
const Stack = createStackNavigator();

const SettingsStack = (context) => {
  const SettingsC = <Settings context={context} />;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: forFade,
      }}
      initialRouteName={"Settings"}
    >
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Settings",
          cardStyle: {
            backgroundColor: "black",
          },
        }}
        initialParams={context.route.params}
      />
      <Stack.Screen
        name="ChangeProfileName"
        component={ChangeProfileName}
        options={{
          title: "Change Profile Name",
          cardStyle: {
            backgroundColor: "black",
          },
        }}
        initialParams={context.route.params}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          title: "Change Password",
          cardStyle: {
            backgroundColor: "black",
          },
        }}
        initialParams={context.route.params}
      />
      <Stack.Screen
        name="Credits"
        component={Credits}
        options={{
          title: "Credits",
          cardStyle: {
            backgroundColor: "black",
          },
        }}
        initialParams={context.route.params}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
