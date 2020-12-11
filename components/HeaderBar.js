import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";

const HeaderBar = ({ backgroundColor, title }) => {
	let bgColor = backgroundColor;
	return (
		<View style={[styles.header, { backgroundColor: bgColor }]}>
			<FontAwesome name={"arrow-left"} size={20} color={"#55D9C1"} />
			<Text style={styles.text}>{title}</Text>
			<FontAwesome name={"plus"} size={20} color={"#55D9C1"} />
		</View>
	);
};

export default HeaderBar;

const styles = StyleSheet.create({
	header: {
		height: 50,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingLeft: 25,
		paddingRight: 25,
	},

	text: {
		fontFamily: "Inter Regular",
		fontStyle: "normal",
		fontWeight: "600",
		fontSize: 16,
		lineHeight: 19,
		color: "#F2F2F2",
	},
});
