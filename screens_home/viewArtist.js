import React from "react";
import {
	Dimensions,
	Image,
	ImageBackground,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from "react-native";
import HeaderBar from "../components/HeaderBar";
import { SafeAreaView } from "react-native-safe-area-context";

const win = Dimensions.get("window");
const ratio = win.width / 1440;

class ViewArtist extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.route.params.item;
		this.delA = this.props.route.params.delA;
	}
	render() {
		let item = this.state;
		return (
			<SafeAreaView style={styles.safeView}>
				<StatusBar backgroundColor="black" barStyle="light-content" />
				<ImageBackground
					source={require("../assets/400x800.png")}
					style={styles.backgroundImage}
				>
					<HeaderBar
						backgroundColor="#0D0D0D"
						title={item.name}
						screenProps={this.props}
						secondIcon={"trash"}
						secondOnPress={() => {
							this.delA(item);
							this.props.navigation.goBack();
						}}
					/>
					<View style={styles.container}>
						<Image
							source={require("../assets/img-not-found-sqr.png")}
							style={styles.musicImage}
						/>
						<View style={styles.customContainer}>
							<Text style={styles.text}>{item.name}</Text>
						</View>
					</View>
					<View style={styles.botImageContainer}>
						<Image
							source={require("../assets/album-bottom.png")}
							style={styles.botImageStyle}
						/>
					</View>
				</ImageBackground>
			</SafeAreaView>
		);
	}
}

export default ViewArtist;

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
	},

	botImageContainer: {
		flex: 1,
		justifyContent: "flex-end",
	},

	botImageStyle: {
		width: win.width,
		height: 293 * ratio,
	},

	container: {
		flex: 5,
		alignItems: "center",
		justifyContent: "space-evenly",
	},

	customContainer: {
		backgroundColor: "#f2f2f2",
		borderRadius: 10,
		borderColor: "#0D0D0D",
		borderStyle: "solid",
		borderWidth: 3,
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},

	musicImage: {
		width: win.width * 0.6,
		height: win.width * 0.6,
	},

	safeView: {
		flex: 1,
	},

	text: {
		fontFamily: "Inter Regular",
		fontSize: 16,
		lineHeight: 20,
		color: "#0D0D0D",
	},
});
