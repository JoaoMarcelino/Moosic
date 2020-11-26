import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import Routes from "./navigation/routes";

import * as firebase from "firebase";
import ApiKeys from "./constants/apiKeys";
import { AppProvider } from "./components/Firebase/app-context";
import { AppConsumer } from "./components/Firebase/app-context";

let customFonts = {
	"Courier Prime Regular": require("./assets/fonts/CourierPrime-Regular.ttf"),
	"Courier Prime Bold": require("./assets/fonts/CourierPrime-Bold.ttf"),
	"Inter Regular": require("./assets/fonts/Inter-Regular.ttf"),
};

//const Stack = createStackNavigator();

class App extends React.Component {
	constructor(props) {
		super(props);

		if (!firebase.apps.length) {
			firebase.initializeApp(ApiKeys.FirebaseConfig);
		}
	}

	state = {
		fontsLoaded: false,
	};

	async _loadFontsAsync() {
		await Font.loadAsync(customFonts);
		this.setState({ fontsLoaded: true });
	}

	componentDidMount() {
		this._loadFontsAsync();
	}

	render() {
		if (this.state.fontsLoaded) {
			return (
				<AppProvider>
					<AppConsumer>
						{(context) => <Routes context={context} />}
					</AppConsumer>
				</AppProvider>
			);
		} else {
			return <AppLoading />;
		}
	}
}

export default App;
