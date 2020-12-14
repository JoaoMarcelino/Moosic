import React from "react";
import {
	Image,
	ImageBackground,
	StatusBar,
	StyleSheet,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../components/HeaderBar";
const initialState = {};

class Credits extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ...initialState };
	}

	render() {
		return (
			<SafeAreaView style={styles.safeView}>
				<StatusBar backgroundColor="black" barStyle="light-content" />
				<HeaderBar
					backgroundColor="#0D0D0D"
					title="Credits"
					screenProps={this.props}
					secondIcon={null}
					secondOnPress={null}
				/>
				<ImageBackground
					source={require("../assets/credits.png")}
					style={styles.backgroundImage}
				></ImageBackground>
			</SafeAreaView>
		);
	}
}

export default Credits;

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		flexDirection: "column-reverse",
	},

	safeView: {
		flex: 1,
	},
});
