import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";

const HeaderBar = ({
	backgroundColor,
	title,
	screenProps,
	secondIcon,
	secondOnPress,
}) => {
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
			<Text numberOfLines={1} style={styles.text}>
				{title.length < 35
					? `${title}`
					: `${title.substring(0, 32)}...`}
			</Text>
			<TouchableOpacity style={{ padding: 25 }} onPress={secondOnPress}>
				<FontAwesome
					name={secondIcon === null ? "plus" : secondIcon}
					size={20}
					color={secondOnPress === null ? backgroundColor : "#55D9C1"}
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
