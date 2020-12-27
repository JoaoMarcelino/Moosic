import { CheckBox } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FormButton from "../components/FormButton";
import React from "react";
import HeaderBar from "../components/HeaderBar";

import {
	ImageBackground,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

class ContactUs extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<SafeAreaView style={styles.safeView}>
				<StatusBar backgroundColor="black" barStyle="light-content" />
				<HeaderBar
					backgroundColor="#0D0D0D"
					title="Contact Us"
					screenProps={this.props}
					addOnPress={null}
				/>
				<ImageBackground
					source={require("../assets/400x800.png")}
					style={styles.backgroundImage}
				>
					<View style={styles.container}>
						<Text style={styles.text}>
							<FontAwesome
								name={"envelope"}
								size={20}
								color={"#0D0D0D"}
							/>
							{" moosicpgi@gmail.com"}
						</Text>
						<Text style={styles.text}>
							<FontAwesome
								name={"facebook"}
								size={20}
								color={"#0D0D0D"}
							/>
							{" facebook.com/moosicpgi"}
						</Text>
						<Text style={styles.text}>
							<FontAwesome
								name={"instagram"}
								size={20}
								color={"#0D0D0D"}
							/>
							{" instagram.com/moosic_app"}
						</Text>
					</View>
				</ImageBackground>
			</SafeAreaView>
		);
	}
}

export default ContactUs;

//No font on placeholders cause of a react bug
const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
		alignItems: "center",
		justifyContent: "center",
	},

	container: {
		backgroundColor: "#f2f2f2",
		borderRadius: 10,
		borderColor: "#0D0D0D",
		borderStyle: "solid",
		borderWidth: 3,
		alignItems: "center",
		justifyContent: "center",
		padding: 16,
	},

	text: {
		fontFamily: "Courier Prime Bold",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: 16,
		lineHeight: 40,
		color: "#0D0D0D",
	},

	safeView: {
		flex: 1,
	},
});