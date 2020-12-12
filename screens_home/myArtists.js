import React from "react";
import {
	FlatList,
	ImageBackground,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from "react-native";
import FormButton from "../components/FormButton";
import HeaderBar from "../components/HeaderBar";
import { SafeAreaView } from "react-native-safe-area-context";
import PersonalItem from "../components/PersonalItem";

const initial_state = {
	name: "",
	loading: false,
	artistList: null,
};

class MyArtists extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ...initial_state };
		this.context = this.props.route.params.context;
		this.willFocusListener = this.props.navigation.addListener(
			"focus",
			() => {
				this.componentWillFocus();
			}
		);
	}

	componentWillFocus() {
		this.updateArtists2();
		console.log("focus");
	}
	updateArtists2() {
		let artistList = [];
		let object = {};
		this.setState({ loading: true });
		console.log(this.props.route.params.context.artists());
		this.props.route.params.context.artists().then((querySnapshot) => {
			querySnapshot.forEach(function (doc) {
				object = doc.data();
				object.id = doc.id;
				artistList.push(object);
			});
			this.setState({ artistList });
			this.setState({ loading: false });
		});
	}

	updateArtists(item) {
		this.props.route.params.context.removeArtist(item);
		let artistList = [];
		let object = {};
		this.setState({ loading: true });
		console.log(this.props.route.params.context.artists());
		this.props.route.params.context.artists().then((querySnapshot) => {
			querySnapshot.forEach(function (doc) {
				object = doc.data();
				object.id = doc.id;
				if (object.id != item.id) {
					artistList.push(object);
				}
			});
			this.setState({ artistList });
			this.setState({ loading: false });
		});
	}
	componentDidMount() {
		let artistList = [];
		let object = {};
		this.setState({ loading: true });
		console.log(this.props.route.params.context.artists());
		this.props.route.params.context.artists().then((querySnapshot) => {
			querySnapshot.forEach(function (doc) {
				object = doc.data();
				object.id = doc.id;
				artistList.push(object);
			});
			this.setState({ artistList });
			this.setState({ loading: false });
		});
	}

	render() {
		const { artistList } = this.state;
		return (
			<SafeAreaView style={styles.safeView}>
				<StatusBar backgroundColor="black" barStyle="light-content" />
				<ImageBackground
					source={require("../assets/400x800.png")}
					style={styles.backgroundImage}
				>
					<HeaderBar
						backgroundColor="#0D0D0D"
						title="My Artists"
						screenProps={this.props}
						addOnPress={() =>
							this.props.navigation.navigate("AddArtist", {
								artistList,
							})
						}
					/>
					<View style={styles.container}>
						<FlatList
							data={artistList}
							renderItem={({ item }) => (
								<PersonalItem
									upperText={item.name}
									bottomText={null}
									onPress={() =>
										this.props.navigation.navigate(
											"ViewMusic",
											{
												item,
											}
										)
									}
								/>
							)}
						/>
					</View>
				</ImageBackground>
			</SafeAreaView>
		);
	}
}

export default MyArtists;

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
	},

	container: {
		paddingTop: 25,
		flex: 1,
		alignItems: "center",
	},

	safeView: {
		flex: 1,
	},
});
