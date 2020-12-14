import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../components/HeaderBar";
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
	Alert,
} from "react-native";
import firebase from "firebase";
const initialState = { oldpass: "", p1: "", p2: "" };
class ChangePassword extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ...initialState };
		this.context = this.props.route.params.context;
	}

	changePassword(oldpass, p1, p2) {
		var user = firebase.auth().currentUser;
		this.props.route.params.context
			.doSignInWithEmailAndPassword(user.email, oldpass)
			.then((authUser) => {
				if (p1 == p2) {
					var user = firebase.auth().currentUser;
					user.updatePassword(p1)
						.then(this.props.navigation.navigate("Settings"))
						.catch(function (error) {
							// An error happened.
							alert(error);
						});
					alert("Password Successfully Changed");
				} else {
					//uma mensagem de erro ou popup era cool @vinagrito
					alert("Passwords don't match");
				}
			})
			.catch((error) => {
				this.setState({ error });
				console.log(error);
				alert("Wrong password");
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
					<HeaderBar
						backgroundColor="#0D0D0D"
						title="Change Password"
						screenProps={this.props}
						secondIcon={null}
						secondOnPress={null}
					/>
					<View style={styles.container}>
						<TextInput
							style={styles.inputForm}
							placeholder="Old Password"
							placeholderStyle={styles.inputFormText}
							placeholderTextColor="#0D0D0D"
							secureTextEntry={true}
							onChangeText={(text) => (this.state.oldpass = text)}
							// CODIGO DE ACTUALLY MUDAR O NOME AQUI PROVAVELMENTE  @JOAO TEIXEIRA
						/>
						<TextInput
							style={styles.inputForm}
							placeholder="New Password"
							placeholderStyle={styles.inputFormText}
							placeholderTextColor="#0D0D0D"
							secureTextEntry={true}
							onChangeText={(text) => (this.state.p1 = text)}
							// CODIGO DE ACTUALLY MUDAR O NOME AQUI PROVAVELMENTE  @JOAO TEIXEIRA
						/>
						<TextInput
							style={styles.inputForm}
							placeholder="Confirm New Password"
							placeholderStyle={styles.inputFormText}
							placeholderTextColor="#0D0D0D"
							secureTextEntry={true}
							onChangeText={(text) => (this.state.p2 = text)}
							//  DEVE CHECKAR SE SAO IGUAIS I GUESS, SO DEIXA MUDAR SE FOREM IGUAIS SENAO MANDA UM alert() OU ALGO DO GENERO @JOAO TEIXEIRA
						/>
						<FormButton
							onPress={() =>
								this.changePassword(
									this.state.oldpass,
									this.state.p1,
									this.state.p2
								)
							}
							buttonTitle="Confirm"
						/>
					</View>
					<View style={{ flex: 2 }} />
				</ImageBackground>
			</SafeAreaView>
		);
	}
}

export default ChangePassword;

//No font on placeholders cause of a react bug
const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
	},

	container: {
		flex: 3,
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

	safeView: {
		flex: 1,
	},
});
