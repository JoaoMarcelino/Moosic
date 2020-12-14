import HeaderBar from "../components/HeaderBar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CheckBox } from "react-native-elements";
import {
	Dimensions,
	Image,
	ImageBackground,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from "react-native";

const win = Dimensions.get("window");
const ratio = win.width / 1440;

class ViewMusic extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.route.params.item;
		this.delM = this.props.route.params.delM;
	}
	render() {
		let item = this.state;
		let context = this.props.route.params.context;
		return (
			<SafeAreaView style={styles.safeView}>
				<StatusBar backgroundColor="black" barStyle="light-content" />
				<ImageBackground
					source={require("../assets/400x800.png")}
					style={styles.backgroundImage}
				>
					<HeaderBar
						backgroundColor="#0D0D0D"
						title={item.title}
						screenProps={this.props}
						secondIcon={"times"}
						secondOnPress={() => {
							this.delM(item);
							this.props.navigation.goBack();
						}}
					/>
					<View style={styles.container}>
						<Image
							source={require("../assets/img-not-found-sqr.png")}
							style={styles.musicImage}
						/>
						<View style={styles.customContainer}>
							<Text style={styles.text}>
								<Text style={{ fontWeight: "bold" }}>
									{"Title: "}
								</Text>
								<Text>{item.title}</Text>
							</Text>
							<Text style={styles.text}>
								<Text style={{ fontWeight: "bold" }}>
									{"Artist: "}
								</Text>
								<Text>{item.artist}</Text>
							</Text>
							<Text style={styles.text}>
								<Text style={{ fontWeight: "bold" }}>
									{"Album: "}
								</Text>
								<Text>{item.album}</Text>
							</Text>
						</View>
						<CheckBox
							title={"Listened"}
							checked={item.listened}
							onPress={() => {
								if (item.listened) item.listened = false;
								else item.listened = true;
								this.setState(context.setListenedMusic(item));
							}}
							containerStyle={styles.checkBox}
							textStyle={styles.textCheckBox}
							size={18}
							checkedColor="#0D0D0D"
						/>
					</View>
					<View style={styles.botImageContainer}>
						<Image
							source={require("../assets/music-bottom.png")}
							style={styles.botImageStyle}
						/>
					</View>
				</ImageBackground>
			</SafeAreaView>
		);
	}
}

export default ViewMusic;

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
	},

	botImageStyle: {
		width: win.width,
		height: 290 * ratio,
	},

	botImageContainer: {
		flex: 1,
		justifyContent: "flex-end",
	},

	checkBox: {
		backgroundColor: "#f2f2f2",
		borderRadius: 100,
		borderColor: "#0D0D0D",
		borderStyle: "solid",
		borderWidth: 3,
		alignItems: "center",
		justifyContent: "center",
	},

	container: {
		flex: 3,
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
		lineHeight: 19,
		color: "#0D0D0D",
	},

	textCheckBox: {
		fontFamily: "Inter Regular",
		fontSize: 16,
		lineHeight: 19,
		color: "#0D0D0D",
	},
});
