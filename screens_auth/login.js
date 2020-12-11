import { CheckBox } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import FormButton from "../components/FormButton";
import React from "react";
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

const initialState = {
	email: "",
	password: "",
	terms: 0,
};

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ...initialState };
		this.context = this.props.route.params.context;
	}

	onSubmit = (event) => {
		const { email, password, terms } = this.state;

		const email1 = "admin1@admin.com";
		const password1 = "admin1";

		this.props.route.params.context
			.doSignInWithEmailAndPassword(email1, password1)
			.then((authUser) => {
				console.log("hey");
				this.setState({ ...initialState });
				this.props.navigation.navigate("AppBottomTab");
			})
			.catch((error) => {
				this.setState({ error });
				console.log(error);
			});

		event.preventDefault();
	};

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.defaultValue });
	};

	render() {
		const { email, password, terms } = this.state;
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
									this.props.navigation.navigate(
										"Authentication"
									);
								}}
							>
								<FontAwesome
									name={"times"}
									size={24}
									color={"#0D0D0D"}
								/>
							</TouchableOpacity>
							<Text style={styles.pageHeaderText}>Log In</Text>
						</View>
						<View style={styles.form}>
							<TextInput
								style={styles.inputForm}
								placeholder="Email"
								placeholderStyle={styles.inputFormText}
								placeholderTextColor="#0D0D0D"
								onChangeText={(text) =>
									(this.state.email = text)
								}
								defaultValue={email}
							/>
							<TextInput
								style={styles.inputForm}
								placeholder="Password"
								placeholderTextColor="#0D0D0D"
								secureTextEntry={true}
								onChangeText={(text) =>
									(this.state.password = text)
								}
								defaultValue={password}
							/>

							<CheckBox
								title="Remember me"
								containerStyle={styles.checkboxContainer}
								textStyle={styles.checkboxContainerText}
							/>
							<FormButton
								onPress={this.onSubmit}
								buttonTitle="Log In"
							/>
						</View>
					</View>
					<View style={{ flex: 2 }} />
				</ImageBackground>
			</SafeAreaView>
		);
	}
}

export default Login;

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
		fontSize: 36,
		lineHeight: 40,
		color: "#358C7C",
	},

	safeView: {
		flex: 1,
	},
});
