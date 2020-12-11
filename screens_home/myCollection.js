import React from "react";
import {
	FlatList,
	ImageBackground,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from "react-native";
import FormButton from "../components/FormButton";
import HeaderBar from "../components/HeaderBar";
import { SafeAreaView } from "react-native-safe-area-context";

class MyCollection extends React.Component {
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
					<HeaderBar
						backgroundColor="#0D0D0D"
						title="My Collection"
						screenProps={this.props}
						addOnPress={null}
					/>
					<View style={styles.container}></View>
				</ImageBackground>
			</SafeAreaView>
		);
	}
}

export default MyCollection;

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
	},

	container: {
		flex: 1,
		alignItems: "center",
	},

	safeView: {
		flex: 1,
	},
});
