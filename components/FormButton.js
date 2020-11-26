import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../utils/dimensions";

const FormButton = ({ buttonTitle, ...rest }) => {
	return (
		<TouchableOpacity style={styles.buttonContainer} {...rest}>
			<Text style={styles.buttonText}>{buttonTitle}</Text>
		</TouchableOpacity>
	);
};
export default FormButton;

const styles = StyleSheet.create({
	buttonContainer: {
		backgroundColor: "#f2f2f2",
		borderRadius: 100,
		borderColor: "#0D0D0D",
		borderStyle: "solid",
		borderWidth: 3,
		width: 110,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		fontFamily: "Inter Regular",
		//fontStyle: "normal",
		//fontWeight: "600",
		fontSize: 16,
		lineHeight: 19,
		color: "#0D0D0D",
	},
});
