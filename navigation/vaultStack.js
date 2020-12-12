import React, { useEffect, View } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Animated } from "react-native";

import AddAlbum from "../screens_home/addAlbum";
import AddMusic from "../screens_home/addMusic";
import Vault from "../screens_home/vault";
import MyAlbums from "../screens_home/myAlbums";
import MyMusic from "../screens_home/myMusic";
import MyCollection from "../screens_home/myCollection";
import AddArtist from "../screens_home/addArtist";
import MyArtists from "../screens_home/myArtists";
import AddCollection from "../screens_home/addCollection";
import ViewArtist from "../screens_home/viewArtist";
const Stack = createStackNavigator();

const VaultStack = (navigation) => {
  const VaultC = <Vault navigation={navigation} />;
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
        initialParams={navigation.route.params}
      />
      <Stack.Screen
        name="AddMusic"
        component={AddMusic}
        options={{
          title: "Add Music",
          cardStyle: {
            backgroundColor: "black",
          },
        }}
        initialParams={navigation.route.params}
      />
      <Stack.Screen
        name="AddAlbum"
        component={AddAlbum}
        options={{
          title: "Welcome",
          cardStyle: {
            backgroundColor: "black",
          },
        }}
        initialParams={navigation.route.params}
      />
      <Stack.Screen
        name="AddArtist"
        component={AddArtist}
        options={{
          title: "Welcome",
          cardStyle: {
            backgroundColor: "black",
          },
        }}
        initialParams={navigation.route.params}
      />
      <Stack.Screen
        name="AddCollection"
        component={AddCollection}
        options={{
          title: "Welcome",
          cardStyle: {
            backgroundColor: "black",
          },
        }}
        initialParams={navigation.route.params}
      />
      <Stack.Screen
        name="MyAlbums"
        component={MyAlbums}
        options={{
          title: "Welcome",
          cardStyle: {
            backgroundColor: "black",
          },
        }}
        initialParams={navigation.route.params}
      />
      <Stack.Screen
        name="MyMusic"
        component={MyMusic}
        options={{
          title: "Welcome",
          cardStyle: {
            backgroundColor: "black",
          },
        }}
        initialParams={navigation.route.params}
      />
      <Stack.Screen
        name="MyArtists"
        component={MyArtists}
        options={{
          title: "Welcome",
          cardStyle: {
            backgroundColor: "black",
          },
        }}
        initialParams={navigation.route.params}
      />
      <Stack.Screen
        name="MyCollection"
        component={MyCollection}
        options={{
          title: "Welcome",
          cardStyle: {
            backgroundColor: "black",
          },
        }}
        initialParams={navigation.route.params}
      />
      
      <Stack.Screen
        name="ViewMusic"
        component={viewMusic}
        options={{
          title: "Music",
          cardStyle: {
            backgroundColor: "black",
          },
        }}
        initialParams={navigation.route.params}
      />

      <Stack.Screen
        name="ViewAlbum"
        component={viewMusic}
        options={{
          title: "Album",
          cardStyle: {
            backgroundColor: "black",
          },
        }}
        initialParams={navigation.route.params}
      />

      <Stack.Screen
        name="ViewArtist"
        component={ViewArtist}
        options={{
          title: "Artist",
          cardStyle: {
            backgroundColor: "pink",
          },
        }}
        initialParams={navigation.route.params}
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
