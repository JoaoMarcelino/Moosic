import React, { useEffect, View } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Animated } from "react-native";

import Profile from "../screens_home/profile";
import Settings from "../screens_home/settings";

const Stack = createStackNavigator();

const ProfileStack = (context) => {
  const ProfileC = <Profile context={context} />;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: forFade,
      }}
      initialRouteName={"Profile"}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          cardStyle: {
            backgroundColor: "black",
          },
        }}
        initialParams={context.route.params}
      />
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
    </Stack.Navigator>
  );
};

export default ProfileStack;

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});