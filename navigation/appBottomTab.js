import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeView from "../screens_home/homeView";
import Search from "../screens_home/search";
import Vault from "../screens_home/vault";
import Profile from "../screens_home/profile";
import AddMusic from "../screens_home/addMusic";
import AddAlbum from "../screens_home/addAlbum";
import VaultStack from "../navigation/vaultStack";
import Ionicons from "@expo/vector-icons/Ionicons";

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
				labelStyle: { fontSize: 12 },
				tabStyle: { height: 50 },
				style: { backgroundColor: "#151515" },
			}}
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
