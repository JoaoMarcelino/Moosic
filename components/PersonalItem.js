import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";

const PersonalItem = ({ upperText, bottomText, ...rest }) => {
	return (
		<TouchableOpacity {...rest}>
			<View style={styles.container}>
				<Image
					source={require("../assets/disc_placeholder.png")}
					style={styles.image}
				/>
				<View style={styles.infoBox}>
					<Text numberOfLines={1} style={styles.upperText}>
						{upperText}
					</Text>
					{bottomText != null && (
						<Text numberOfLines={1} style={styles.bottomText}>
							{bottomText}
						</Text>
					)}
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default PersonalItem;

const styles = StyleSheet.create({
	bottomText: {
		color: "#989898",
	},

	container: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 15,
	},

	image: {
		resizeMode: "contain",
		width: 100,
		height: 100,
		marginRight: 25,
		borderWidth: 3,
		borderColor: "#0D0D0D",
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

	upperText: {
		color: "#0D0D0D",
	},
});
