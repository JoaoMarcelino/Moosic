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
	title: "",
	artist: "",
	year: "",
	loading: false,
	collectionList: null,
};

class MyCollection extends React.Component {
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
		this.updateCollection2();
		console.log("focus");
	}
	updateCollection2() {
		let collectionList = [];
		let object = {};
		this.setState({ loading: true });
		console.log(this.props.route.params.context.collection());
		this.props.route.params.context.collection().then((querySnapshot) => {
			querySnapshot.forEach(function (doc) {
				object = doc.data();
				object.id = doc.id;
				collectionList.push(object);
			});
			this.setState({ collectionList });
			this.setState({ loading: false });
		});
	}

	updateCollection(item) {
		this.props.route.params.context.removeCollection(item);
		let collectionList = [];
		let object = {};
		this.setState({ loading: true });
		console.log(this.props.route.params.context.collection());
		this.props.route.params.context.collection().then((querySnapshot) => {
			querySnapshot.forEach(function (doc) {
				object = doc.data();
				object.id = doc.id;
				if (object.id != item.id) {
					collectionList.push(object);
				}
			});
			this.setState({ collectionList });
			this.setState({ loading: false });
		});
	}
	componentDidMount() {
		let collectionList = [];
		let object = {};
		this.setState({ loading: true });
		console.log(this.props.route.params.context.collection());
		this.props.route.params.context.collection().then((querySnapshot) => {
			querySnapshot.forEach(function (doc) {
				object = doc.data();
				object.id = doc.id;
				collectionList.push(object);
			});
			this.setState({ collectionList });
			this.setState({ loading: false });
		});
	}

	render() {
		const { collectionList } = this.state;
		return (
			<SafeAreaView style={styles.safeView}>
				<StatusBar backgroundColor="black" barStyle="light-content" />
				<ImageBackground
					source={require("../assets/400x800.png")}
					style={styles.backgroundImage}
				>
					<HeaderBar
						backgroundColor="#0D0D0D"
						title="My Collection"
						screenProps={this.props}
						addOnPress={() =>
							this.props.navigation.navigate("AddCollection", {
								collectionList,
							})
						}
					/>
					<View style={styles.container}>
						<FlatList
							data={collectionList}
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

export default MyCollection;

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
