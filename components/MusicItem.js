import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

const MusicItem = ({ item }) => {
	return (
		<View style={styles.container}>
			<Image
				source={require("../assets/album-placeholder.png")}
				style={styles.image}
			/>
			<View style={styles.infoBox}>
				<Text style={styles.musicText}>{item.title}</Text>
				<Text style={styles.artistText}>{item.artist}</Text>
			</View>
		</View>
	);
};

export default MusicItem;

const styles = StyleSheet.create({
	artistText: {
		color: "#989898",
	},

	container: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
	},

	image: {
		resizeMode: "contain",
		width: 100,
		height: 100,
		marginRight: 25,
	},

	infoBox: {
		justifyContent: "center",
		backgroundColor: "#F2F2F2",
		borderRadius: 8,
		borderColor: "#0D0D0D",
		borderStyle: "solid",
		borderWidth: 3,
		height: 57,
		width: 200,
		paddingLeft: 16,
		fontSize: 16,
		lineHeight: 19,
	},

	musicText: {
		color: "#0D0D0D",
	},
});
