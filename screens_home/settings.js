import React from "react";
import {
	Image,
	ImageBackground,
	StatusBar,
	StyleSheet,
	View,
} from "react-native";
import SettingsButton from "../components/SettingsButton";
import SocialButton from "../components/SocialButton";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../components/HeaderBar";

class Settings extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<SafeAreaView style={styles.safeView}>
				<StatusBar backgroundColor="black" barStyle="light-content" />
				<HeaderBar
					backgroundColor="#0D0D0D"
					title="Settings"
					screenProps={this.props}
					addOnPress={null}
				/>
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
							buttonTitle="Change Username"
							onPress={null}
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
							buttonTitle="Change Email"
							onPress={null}
						/>

						<SettingsButton
							buttonTitle="Credits"
							onPress={() => {
								this.props.navigation.navigate("Credits");
							}}
						/>
					</View>
					<View style={styles.imageContainer}>
						<Image
							source={require("../assets/settings-end.png")}
							style={styles.image}
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
		flex: 2,
		paddingTop: 20,
		alignItems: "center",
		justifyContent: "space-evenly",
	},

	image: {
		resizeMode: "contain",
		width: 400,
		height: 63,
	},

	imageContainer: {
		flex: 1,
		justifyContent: "flex-end",
	},

	safeView: {
		flex: 1,
	},
});
