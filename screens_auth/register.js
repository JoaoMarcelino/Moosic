import { CheckBox } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import FormButton from "../components/FormButton";
import React from "react";

import {
	Image,
	ImageBackground,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";

const initialState = {
	username: "",
	email: "",
	password: "",
	passwordcheck: "",
	terms: false,
};

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ...initialState };
		this.context = this.props.route.params.context;
		console.log("register", this.context);
	}

	onSubmit = (event) => {
		const { username, email, password, passwordcheck, terms } = this.state;
		this.props.route.params.context
			.doCreateUserWithEmailAndPassword(email, password)
			.then((authUser) => {
				this.setState({ ...initialState });
				//this.props.navigation.navigate('HomeView');
			})
			.catch((error) => {
				this.setState({ error });
				console.log(error);
			});

		event.preventDefault();
	};

	render() {
		const { username, email, password, passwordcheck, terms } = this.state;
		return (
			<SafeAreaView style={styles.safeView}>
				<StatusBar backgroundColor="black" barStyle="light-content" />
				<ImageBackground
					source={require("../assets/400x800.png")}
					style={styles.backgroundImage}
				>
					<View style={styles.container}>
						<View style={styles.pageHeader}>
							<Image
								source={require("../assets/Crossmark.png")}
								style={styles.crossmark}
							/>
							<Text style={styles.pageHeaderText}>Sign Up</Text>
						</View>

						<View style={styles.form}>
							<TextInput
								style={styles.inputForm}
								name="username"
								placeholder="Name"
								placeholderStyle={styles.inputFormText}
								placeholderTextColor="#0D0D0D"
								onChangeText={(text) =>
									(this.state.username = text)
								}
								defaultValue={username}
							/>

							<TextInput
								style={styles.inputForm}
								name="email"
								placeholder="Email"
								placeholderStyle={styles.inputFormText}
								placeholderTextColor="#0D0D0D"
								onChangeText={(text) =>
									(this.state.email = text)
								}
								defaultValue={email}
							/>

							<TextInput
								name="password"
								style={styles.inputForm}
								placeholder="Password"
								placeholderTextColor="#0D0D0D"
								secureTextEntry={true}
								onChangeText={(text) =>
									(this.state.password = text)
								}
								defaultValue={password}
							/>

							<TextInput
								name="passwordcheck"
								style={styles.inputForm}
								placeholder="Confirm Password"
								placeholderTextColor="#0D0D0D"
								secureTextEntry={true}
								onChangeText={(text) =>
									(this.state.passwordcheck = text)
								}
								defaultValue={passwordcheck}
							/>

							<CheckBox
								title="I agree to the terms of service"
								containerStyle={styles.checkboxContainer}
								textStyle={styles.checkboxContainerText}
							/>

							<FormButton
								onPress={this.onSubmit}
								buttonTitle="Sign Up"
							/>
						</View>
					</View>
					<View style={{ flex: 1 }} />
				</ImageBackground>
			</SafeAreaView>
		);
	}
}

export default Register;

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
		flex: 1,
		resizeMode: "contain",
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
		justifyContent: "space-evenly",
		alignItems: "center",
		marginBottom: 20,
	},

	pageHeaderText: {
		flex: 2,
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
