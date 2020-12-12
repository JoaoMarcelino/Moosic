import React from "react";
import {
	FlatList,
	ImageBackground,
	StatusBar,
	StyleSheet,
	View,
} from "react-native";
import PersonalItem from "../components/PersonalItem";
import HeaderBar from "../components/HeaderBar";
import { SafeAreaView } from "react-native-safe-area-context";

const INITIAL_STATE = {
	title: "Africa",
	artist: "Toto",
	album: "Toto IV",
	loading: false,
	musicList: null,
};

class MyMusic extends React.Component {
	constructor(props) {
		super(props);

		this.state = { ...INITIAL_STATE };

		this.willFocusListener = this.props.navigation.addListener(
			"focus",
			() => {
				this.componentWillFocus();
			}
		);
	}

	componentWillFocus() {
		this.updateMusic2();
	}
	updateMusic2() {
		let musicList = [];
		let object = {};
		console.log(this.props.route.params.context.musics());
		this.props.route.params.context.musics().then((querySnapshot) => {
			querySnapshot.forEach(function (doc) {
				object = doc.data();
				object.id = doc.id;
				musicList.push(object);
			});
			this.setState({ musicList });
		});

		console.log(musicList);
	}

	updateMusic(item) {
		this.props.route.params.context.removeMusic(item);
		let musicList = [];
		let object = {};
		console.log(this.props.route.params.context.musics());
		this.props.route.params.context.musics().then((querySnapshot) => {
			querySnapshot.forEach(function (doc) {
				object = doc.data();
				object.id = doc.id;
				if (object.id != item.id) {
					musicList.push(object);
				}
			});
			this.setState({ musicList });
		});

		console.log(musicList);
	}

	componentDidMount() {
		let musicList = [];
		let object = {};
		this.setState({ loading: true });
		console.log(this.props.route.params.context.musics());
		this.props.route.params.context.musics().then((querySnapshot) => {
			querySnapshot.forEach(function (doc) {
				object = doc.data();
				object.id = doc.id;
				musicList.push(object);
			});
			this.setState({ musicList });
			this.setState({ loading: false });
		});
	}

	/*
		ADICIONAR DENTRO DA FLAT LIST
		addOnPress={() =>
							this.props.navigation.navigate("ViewMusic", {
								item,
							})
						}
						/
					/>
*/

	render() {
		const { musicList } = this.state;
		return (
			<SafeAreaView style={styles.safeView}>
				<StatusBar backgroundColor="black" barStyle="light-content" />
				<ImageBackground
					source={require("../assets/400x800.png")}
					style={styles.backgroundImage}
				>
					<HeaderBar
						backgroundColor="#0D0D0D"
						title="My Music"
						screenProps={this.props}
						addOnPress={() =>
							this.props.navigation.navigate("AddMusic", {
								musicList,
							})
						}
					/>
					<View style={styles.container}>
						<FlatList
							data={musicList}
							renderItem={({ item }) => (
								<PersonalItem
									upperText={item.title}
									bottomText={item.artist}
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

export default MyMusic;

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
