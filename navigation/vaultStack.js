import React, { useEffect, View } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Animated } from "react-native";

import AddAlbum from "../screens_home/addAlbum";
import AddMusic from "../screens_home/addMusic";
import Vault from "../screens_home/vault";

const Stack = createStackNavigator();

const VaultStack = (context) => {
  const VaultC = <Vault context={context} />;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,

        cardStyleInterpolator: forFade,
      }}
      initialRouteName={"Vault"}
    >
      <Stack.Screen
        name="Vault"
        component={Vault}
        options={{
          title: "Vault",
          cardStyle: {
            backgroundColor: "black",
          },
        }}
        initialParams={context.route.params}
      />
      <Stack.Screen
        name="Add Music"
        component={AddMusic}
        options={{
          title: "Add Music",
          cardStyle: {
            backgroundColor: "black",
          },
        }}
        initialParams={context.route.params}
      />
      <Stack.Screen
        name="Add Album"
        component={AddAlbum}
        options={{
          title: "Welcome",
          cardStyle: {
            backgroundColor: "black",
          },
        }}
        initialParams={context.route.params}
      />
    </Stack.Navigator>
  );
};

export default VaultStack;

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
