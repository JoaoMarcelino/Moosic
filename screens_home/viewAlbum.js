import React from "react";
import {
	Dimensions,
	Image,
	ImageBackground,
	StatusBar,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from "react-native";
import FormButton from "../components/FormButton";
import HeaderBar from "../components/HeaderBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { functions } from "firebase";

import * as Progress from "react-native-progress";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const win = Dimensions.get("window");
const ratio = win.width / 1440;

class ViewAlbum extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.route.params.item;
		this.delA = this.props.route.params.delA;
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
									{"Year: "}
								</Text>
								<Text>{item.year}</Text>
							</Text>
							<Text style={styles.text}>
								<Text style={{ fontWeight: "bold" }}>
									{"Number of Tracks: "}
								</Text>
								<Text>{item.numberTracks}</Text>
							</Text>
							<Text style={styles.text}>
								<Text style={{ fontWeight: "bold" }}>
									{"Progress: "}
								</Text>
								<Text>{item.listened}</Text>
							</Text>
							<Progress.Bar
								progress={item.listened / item.numberTracks}
								width={200}
								borderColor={"#0D0D0D"}
								color={"#55D9C1"}
								style={{ marginTop: 10 }}
							/>
						</View>
					</View>
					<View style={styles.plusminus}>
						<TouchableOpacity
							style={styles.icons}
							onPress={() => {
								if (item.listened > 0) {
									item.listened--;
									this.setState(
										context.setListenedAlbum(item)
									);
								}
							}}
						>
							<FontAwesome
								name={"minus"}
								size={20}
								color={"#55D9C1"}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.icons}
							onPress={() => {
								if (item.listened < item.numberTracks) {
									item.listened++;
									this.setState(
										context.setListenedAlbum(item)
									);
								}
							}}
						>
							<FontAwesome
								name={"plus"}
								size={20}
								color={"#55D9C1"}
							/>
						</TouchableOpacity>
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

export default ViewAlbum;

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
		height: 290 * ratio,
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

	plusminus: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
	},

	icons: {
		backgroundColor: "#f2f2f2",
		borderRadius: 100,
		borderColor: "#0D0D0D",
		borderStyle: "solid",
		borderWidth: 3,
		padding: 15,
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
