import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormButton from "../components/FormButton";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
	ImageBackground,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import firebase from "firebase";

const initialState = { name: "" };
class ChangeProfileName extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ...initialState };
	}

	changeName(name) {
		var user = firebase.auth().currentUser;
		console.log("vim aqui");
		user.updateProfile({
			displayName: name,
		})
			.then(function () {
				console.log("update name");
				// Update successful.
			})
			.catch(function (error) {
				console.log("update name error");
				// An error happened.
			});
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
						<View style={styles.pageHeader}>
							<TouchableOpacity
								style={styles.crossmark}
								onPress={() => {
									this.props.navigation.navigate("Settings");
								}}
							>
								<FontAwesome
									name={"times"}
									size={24}
									color={"#0D0D0D"}
								/>
							</TouchableOpacity>
							<Text style={styles.pageHeaderText}>
								Change Profile Name
							</Text>
						</View>
						<View style={styles.form}>
							<TextInput
								style={styles.inputForm}
								placeholder="New Profile Name"
								placeholderStyle={styles.inputFormText}
								placeholderTextColor="#0D0D0D"
								onChangeText={(text) =>
									(this.state.name = text)
								}
								// CODIGO DE ACTUALLY MUDAR O NOME AQUI PROVAVELMENTE  @JOAO TEIXEIRA
							/>
							<FormButton
								onPress={() => this.changeName(this.state.name)}
								buttonTitle="Save Changes"
							/>
						</View>
					</View>
					<View style={{ flex: 2 }} />
				</ImageBackground>
			</SafeAreaView>
		);
	}
}

export default ChangeProfileName;

//No font on placeholders cause of a react bug
const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
	},

	container: {
		flex: 3,
		alignItems: "center",
		padding: 36,
	},

	checkboxContainer: {
		backgroundColor: "#F2F2F2",
		borderColor: "#0D0D0D",
		borderStyle: "solid",
		borderWidth: 3,
		borderRadius: 100,
		height: 40,
		justifyContent: "center",
	},

	checkboxContainerText: {
		fontFamily: "Inter Regular",
		fontStyle: "normal",
		fontWeight: "600",
		fontSize: 14,
		lineHeight: 17,
		color: "#0D0D0D",
	},

	crossmark: {
		position: "absolute",
		left: 16,
	},

	form: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-evenly",
	},

	inputForm: {
		backgroundColor: "#F2F2F2",
		borderRadius: 8,
		borderColor: "#0D0D0D",
		borderStyle: "solid",
		borderWidth: 3,
		height: 57,
		width: 330,
		paddingLeft: 16,
		fontSize: 16,
		lineHeight: 19,
	},

	pageHeader: {
		flexDirection: "row",
		backgroundColor: "#F2F2F2",
		borderRadius: 40,
		borderColor: "#0D0D0D",
		borderStyle: "solid",
		borderWidth: 3,
		height: 57,
		width: 330,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 20,
	},

	pageHeaderText: {
		fontFamily: "Courier Prime Bold",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: 24,
		lineHeight: 40,
		color: "#358C7C",
	},

	safeView: {
		flex: 1,
	},
});
