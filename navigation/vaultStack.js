import React, { useEffect, View } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Animated } from "react-native";

import AddAlbum from "../screens_home/addAlbum";
import AddMusic from "../screens_home/addMusic";
import Vault from "../screens_home/vault";
import MyAlbums from "../screens_home/myAlbums";
import MyMusic from "../screens_home/myMusic";
import MyCollection from "../screens_home/myCollection";
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
				name="AddMusic"
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
				name="AddAlbum"
				component={AddAlbum}
				options={{
					title: "Welcome",
					cardStyle: {
						backgroundColor: "black",
					},
				}}
				initialParams={context.route.params}
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
				initialParams={context.route.params}
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
				initialParams={context.route.params}
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
