import React from "react";
import {
	ImageBackground,
	SectionList,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from "react-native";
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
		this.newReleases = [
			"Devin",
			"Dan",
			"Dominic",
			"Devin",
			"Dan",
			"Dominic",
			"Devin",
			"Dan",
			"Dominic",
		];
		this.notFinished = [
			"Jackson",
			"James",
			"Jillian",
			"Jimmy",
			"Joel",
			"John",
			"Julie",
		];
		this.notStarted = [
			"Kevin",
			"Kennedy",
			"KKK",
			"Kevin",
			"Kennedy",
			"KKK",
		];

		return (
			<SafeAreaView style={styles.safeView}>
				<StatusBar backgroundColor="black" barStyle="light-content" />
				<ImageBackground
					source={require("../assets/400x800.png")}
					style={styles.backgroundImage}
				>
					<View style={styles.container}>
						<SectionList
							sections={[
								{
									title: "New Releases",
									data: this.newReleases.splice(0, 5),
								},
								{
									title: "Not Finished Yet",
									data: this.notFinished.splice(0, 5),
								},
								{
									title: "Not Started",
									data: this.notStarted.splice(0, 5),
								},
							]}
							renderItem={({ item }) => <Text>{item}</Text>}
							renderSectionHeader={({ section }) => (
								<Text>{section.title}</Text>
							)}
							keyExtractor={(item, index) => index}
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
