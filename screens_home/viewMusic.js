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
import { functions } from "firebase";

const ViewMusic = (nav) => {
	let item = nav.route.params.item;

	return (
		<SafeAreaView style={styles.safeView}>
			<StatusBar backgroundColor="black" barStyle="light-content" />
			<ImageBackground
				source={require("../assets/400x800.png")}
				style={styles.backgroundImage}
			>
				<View style={styles.container}>
					<Text style={styles.text}>Title: {item.title}</Text>
					<Text style={styles.text}>Artist: {item.artist}</Text>
					<Text style={styles.text}>Album: {item.album}</Text>
					<Text style={styles.text}>
						Listened: {"" + item.listened}
					</Text>
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default ViewMusic;

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

	text: {
		color: "#F2F2F2",
	},

	safeView: {
		flex: 1,
	},
});

/*<HeaderBar
					backgroundColor="#0D0D0D"
					title={item.title}
					screenProps={this.props}
					addOnPress={null}
				/>*/
