import React from "react";
import {
    FlatList,
    ImageBackground,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
} from "react-native";
import FormButton from "../components/FormButton";
import HeaderBar from "../components/HeaderBar";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const initial_state = {
    title: "",
    artist: "",
    year: "",
    numberTracks: 0,
    listened: 0.0,
    loading: false,
    collectionList: null,
};

class AddCollection extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...initial_state };
        this.context = this.props.route.params.context;
        //console.log("add collection", this.context);
    }

    componentDidMount() {
        let collectionList = [];
        let object = {};
        this.setState({ loading: true });
        //console.log(this.props.route.params.context.collection());
        this.props.route.params.context.collection().then((querySnapshot) => {
            querySnapshot.forEach(function (doc) {
                object = doc.data();
                object.id = doc.id;
                collectionsList.push(object);
            });
            this.setState({ collectionList });
            this.setState({ loading: false });
        });
    }

    addCollection = () => {
        ////console.log(this.props.route.params.context);
        const { title, artist, year, numberTracks, listened } = this.state;
        let obj = { title, artist, year, numberTracks, listened };
        this.props.route.params.context.addCollection(obj);
        this.props.navigation.navigate("MyCollection");
    };

    removeMusic = (obj) => {
        this.props.route.params.context.removeCollection(obj);
    };

    render() {
        const {
            title,
            artist,
            year,
            numberTracks,
            collectionList,
        } = this.state;
        return (
            <SafeAreaView style={styles.safeView}>
                <StatusBar backgroundColor="black" barStyle="light-content" />
                <ImageBackground
                    source={require("../assets/400x800.png")}
                    style={styles.backgroundImage}
                >
                    <HeaderBar
                        backgroundColor="#0D0D0D"
                        title="Add Collection"
                        screenProps={this.props}
                        secondIcon={null}
                        secondOnPress={null}
                    />
                    <View style={styles.container}>
                        <View style={styles.form}>
                            <TextInput
                                style={styles.inputForm}
                                name="Title"
                                placeholder="Title"
                                placeholderStyle={styles.inputFormText}
                                placeholderTextColor="#0D0D0D"
                                onChangeText={(text) =>
                                    (this.state.title = text)
                                }
                                defaultValue={title}
                            />

                            <TextInput
                                style={styles.inputForm}
                                name="Artist"
                                placeholder="Artist"
                                placeholderTextColor="#0D0D0D"
                                onChangeText={(text) =>
                                    (this.state.artist = text)
                                }
                                defaultValue={artist}
                            />

                            <TextInput
                                name="Year"
                                style={styles.inputForm}
                                placeholder="Year"
                                placeholderTextColor="#0D0D0D"
                                onChangeText={(text) =>
                                    (this.state.year = text)
                                }
                                defaultValue={year}
                            />

                            <TextInput
                                name="Number of tracks"
                                style={styles.inputForm}
                                placeholder="Number of tracks"
                                placeholderTextColor="#0D0D0D"
                                onChangeText={(text) =>
                                    (this.state.numberTracks = text)
                                }
                                defaultValue={numberTracks}
                            />

                            <FormButton
                                onPress={() => {
                                    if (
                                        this.state.title != "" &&
                                        this.state.artist != ""
                                    ) {
                                        if (
                                            this.state.year.match(/^[0-9]+$/) !=
                                            null
                                        ) {
                                            this.addCollection();
                                        } else {
                                            alert(
                                                "Invalid input: Year must be a number"
                                            );
                                        }
                                    } else {
                                        alert(
                                            "Invalid input: There are empty fields"
                                        );
                                    }
                                }}
                                buttonTitle="Add"
                            />
                        </View>

                        <View style={{ flex: 1 }} />
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

export default AddCollection;

//No font on placeholders cause of a react bug
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
    },

    container: {
        flex: 1,
        alignItems: "center",
    },

    form: {
        flex: 1.5,
        alignItems: "center",
        justifyContent: "space-evenly",
    },

    inputForm: {
        backgroundColor: "#F2F2F2",
        borderRadius: 8,
        borderColor: "#0D0D0D",
        borderStyle: "solid",
        borderWidth: 3,
        height: 57,
        width: 330,
        paddingLeft: 16,
        fontSize: 16,
        lineHeight: 19,
    },

    safeView: {
        flex: 1,
    },
});
