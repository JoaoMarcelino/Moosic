import React from "react";
import {
	ImageBackground,
	SectionList,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from "react-native";
import FormButton from "../components/FormButton";
import { SafeAreaView } from "react-native-safe-area-context";

const initialState = {
	newReleases: [],
	notFinished: [],
	notStarted: [],
};
class HomeView extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ...initialState };
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
						<Text>Coming Soon!</Text>
						<FormButton
							onPress={() => {
								this.props.navigation.navigate("Vault");
							}}
							buttonTitle="Vault"
							/>
						<StatusBar style="auto" />
					</View>
				</ImageBackground>
			</SafeAreaView>
		);
	}
}

export default HomeView;

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
	},

	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	safeView: {
		flex: 1,
	},
});
