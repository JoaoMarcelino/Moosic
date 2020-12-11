import React from "react";
import {
	ImageBackground,
	StatusBar,
	Text,
	View,
	StyleSheet,
} from "react-native";
import FormButton from "../components/FormButton";
import VaultStack from "../navigation/vaultStack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

class Vault extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<SafeAreaView style={styles.safeView}>
				<StatusBar backgroundColor="black" barStyle="light-content" />
				<ImageBackground
					source={require("../assets/400x800.png")}
					style={styles.backgroundImage}
				>
					<View style={styles.container}>
						<View style={styles.formButtons}>
							<FormButton
								onPress={() => {
									this.props.navigation.navigate("MyMusic");
								}}
								buttonTitle="My Music"
							/>
							<FormButton
								onPress={() => {
									this.props.navigation.navigate("MyAlbums");
								}}
								buttonTitle="My Albums"
							/>
							<FormButton
								onPress={() => {
									this.props.navigation.navigate(
										"MyCollection"
									);
								}}
								buttonTitle="My Collection"
							/>
						</View>
					</View>
				</ImageBackground>
			</SafeAreaView>
		);
	}
}

export default Vault;

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
	},

	container: {
		flex: 1,
		alignItems: "center",
		padding: 25,
	},

	safeView: {
		flex: 1,
	},
});
