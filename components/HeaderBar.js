import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";

const HeaderBar = ({ backgroundColor, title, screenProps, addOnPress }) => {
	let bgColor = backgroundColor;
	return (
		<View style={[styles.header, { backgroundColor: bgColor }]}>
			<TouchableOpacity
				style={{ padding: 25 }}
				onPress={() => {
					screenProps.navigation.goBack();
				}}
			>
				<FontAwesome name={"arrow-left"} size={20} color={"#55D9C1"} />
			</TouchableOpacity>
			<Text style={styles.text}>{title}</Text>
			<TouchableOpacity style={{ padding: 25 }} onPress={addOnPress}>
				<FontAwesome
					name={"plus"}
					size={20}
					color={addOnPress === null ? backgroundColor : "#55D9C1"}
				/>
			</TouchableOpacity>
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
