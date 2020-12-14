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
    albumList: null,
};

class MyAlbums extends React.Component {
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
        this.updateMusic2();
        //console.log("focus");
    }
    updateMusic2() {
        let albumList = [];
        let object = {};
        this.setState({ loading: true });
        //console.log(this.props.route.params.context.albums());
        this.props.route.params.context.albums().then((querySnapshot) => {
            querySnapshot.forEach(function (doc) {
                object = doc.data();
                object.id = doc.id;
                albumList.push(object);
            });
            this.setState({ albumList });
            this.setState({ loading: false });
        });
    }

    updateMusic(item) {
        this.props.route.params.context.removeAlbum(item);
        let albumList = [];
        let object = {};
        this.setState({ loading: true });
        //console.log(this.props.route.params.context.albums());
        this.props.route.params.context.albums().then((querySnapshot) => {
            querySnapshot.forEach(function (doc) {
                object = doc.data();
                object.id = doc.id;
                if (object.id != item.id) {
                    albumList.push(object);
                }
            });
            this.setState({ albumList });
            this.setState({ loading: false });
        });
    }
    componentDidMount() {
        let albumList = [];
        let object = {};
        this.setState({ loading: true });
        //console.log(this.props.route.params.context.albums());
        this.props.route.params.context.albums().then((querySnapshot) => {
            querySnapshot.forEach(function (doc) {
                object = doc.data();
                object.id = doc.id;
                albumList.push(object);
            });
            this.setState({ albumList });
            this.setState({ loading: false });
        });
    }

    render() {
        const { albumList } = this.state;
        return (
            <SafeAreaView style={styles.safeView}>
                <StatusBar backgroundColor="black" barStyle="light-content" />
                <ImageBackground
                    source={require("../assets/400x800.png")}
                    style={styles.backgroundImage}
                >
                    <HeaderBar
                        backgroundColor="#0D0D0D"
                        title="My Albums"
                        screenProps={this.props}
                        secondIcon="plus"
                        secondOnPress={() =>
                            this.props.navigation.navigate("AddAlbum", {
                                albumList,
                            })
                        }
                    />
                    <View style={styles.container}>
                        <FlatList
                            data={albumList}
                            renderItem={({ item }) => (
                                <PersonalItem
                                    upperText={item.title}
                                    bottomText={item.artist}
                                    onPress={() => {
                                        const delA = this.updateMusic;
                                        this.props.navigation.navigate(
                                            "ViewAlbum",
                                            {
                                                item,
                                                delA,
                                            }
                                        );
                                    }}
                                />
                            )}
                        />
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

export default MyAlbums;

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
