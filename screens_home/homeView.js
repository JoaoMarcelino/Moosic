import React from "react";
import {
	ImageBackground,
	SectionList,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from "react-native";
import FormButton from "../components/FormButton";
import { SafeAreaView } from "react-native-safe-area-context";

const initialState = {
	newReleases: [],
	notFinished: [],
	notStarted: [],
};
class HomeView extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ...initialState };
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
						<View style={styles.textContainer}>
							<Text style={styles.textStyle}>
								This screen is coming soon!
							</Text>
							<Text style={styles.textStyle}>
								In the meanwhile check your Vault!
							</Text>
						</View>
						<View style={{ flex: 3 }}>
							<FormButton
								onPress={() => {
									this.props.navigation.navigate("Vault");
								}}
								buttonTitle="Vault"
							/>
						</View>
					</View>
				</ImageBackground>
			</SafeAreaView>
		);
	}
}

export default HomeView;

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
		alignItems: "center",
	},

	container: {
		flex: 1,
		width: "80%",
		justifyContent: "center",
		alignItems: "center",
	},

	safeView: {
		flex: 1,
	},

	textContainer: {
		flex: 3,
		justifyContent: "center",
		alignItems: "center",
	},

	textStyle: {
		textAlign: "center",
		fontFamily: "Courier Prime Bold",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: 24,
		color: "#ffffff",
	},
});
