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

class AvisoLegal extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<SafeAreaView style={styles.safeView}>
				<StatusBar backgroundColor="black" barStyle="light-content" />
				<HeaderBar
					backgroundColor="#0D0D0D"
					title="Aviso Legal"
					screenProps={this.props}
					addOnPress={null}
				/>
				<ImageBackground
					source={require("../assets/400x800.png")}
					style={styles.backgroundImage}
				>
					<View style={styles.container}>
						<Text style={styles.text}>
							Aviso legal: esta aplicação informática foi
							realizada por alunos no âmbito de uma disciplina–
							Processos de gestão e Inovação - do 3º ano da
							licenciatura de Engenharia Informática da Faculdade
							de Ciências e Tecnologia da Universidade de Coimbra
							(FCTUC), pelo que a FCTUC não se responsabiliza pelo
							seu uso e conteúdos.
						</Text>
					</View>
				</ImageBackground>
			</SafeAreaView>
		);
	}
}

export default AvisoLegal;

//No font on placeholders cause of a react bug
const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
		alignItems: "center",
		justifyContent: "center",
	},

	container: {
		width: "80%",
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
		textAlign: "justify",
		fontFamily: "Courier Prime Bold",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: 18,
		lineHeight: 24,
		color: "#0D0D0D",
	},

	safeView: {
		flex: 1,
	},
});
