import React from "react";
import { ImageBackground, StatusBar, StyleSheet, View } from "react-native";
import SettingsButton from "../components/SettingsButton";
import SocialButton from "../components/SocialButton";
import { SafeAreaView } from "react-native-safe-area-context";

class Settings extends React.Component {
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
						<SocialButton
							onPress={() => {
								alert("Spotify!");
							}}
							buttonTitle="Link Your Spotify Account"
							btnType="spotify"
							color="#000"
							backgroundColor="#f2f2f2"
						/>
						<SettingsButton
							buttonTitle="Change Profile Name"
							onPress={() => {
								this.props.navigation.navigate(
									"ChangeProfileName"
								);
							}}
						/>
						<SettingsButton
							buttonTitle="Change Password"
							onPress={() => {
								this.props.navigation.navigate(
									"ChangePassword"
								);
							}}
						/>
						<SettingsButton
							buttonTitle="Credits"
							onPress={() => {
								this.props.navigation.navigate("Credits");
							}}
						/>
					</View>
				</ImageBackground>
			</SafeAreaView>
		);
	}
}

export default Settings;

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
	},

	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},

	safeView: {
		flex: 1,
	},
});
