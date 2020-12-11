import React from "react";
import {
	Image,
	ImageBackground,
	StatusBar,
	StyleSheet,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";

class Vault extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<SafeAreaView style={styles.safeView}>
				<StatusBar backgroundColor="black" barStyle="light-content" />
				<ImageBackground
					source={require("../assets/400x800.png")}
					style={styles.backgroundImage}
				>
					<View style={styles.container}>
						<TouchableOpacity
							onPress={() => {
								this.props.navigation.navigate("MyMusic");
							}}
						>
							<Image
								style={styles.images}
								source={require("../assets/vaultAssets/music.png")}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								this.props.navigation.navigate("MyAlbums");
							}}
						>
							<Image
								style={styles.images}
								source={require("../assets/vaultAssets/albums.png")}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								this.props.navigation.navigate("MyCollection");
							}}
						>
							<Image
								style={styles.images}
								source={require("../assets/vaultAssets/artists.png")}
							/>
						</TouchableOpacity>
						<TouchableOpacity>
							<Image
								style={styles.images}
								source={require("../assets/vaultAssets/personal.png")}
							/>
						</TouchableOpacity>
					</View>
				</ImageBackground>
			</SafeAreaView>
		);
	}
}

export default Vault;

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
	},

	container: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		alignContent: "center",
		justifyContent: "space-evenly",
	},

	images: {
		marginBottom: 5,
		marginTop: 5,
		height: 226,
		width: 150,
	},

	safeView: {
		flex: 1,
	},
});
