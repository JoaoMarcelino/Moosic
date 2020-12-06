import React from "react";
import { StatusBar, StyleSheet, Text, View, SectionList } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

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
			<View style={styles.container}>
				<StatusBar backgroundColor="black" barStyle="light-content" />
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
		);
	}
}

export default HomeView;
