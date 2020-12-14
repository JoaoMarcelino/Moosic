import React from "react";
import {
    ImageBackground,
    FlatList,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";
import FormButton from "../components/FormButton";
import { SearchBar } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

const INITIAL_STATE = {
    title: "Africa",
    artist: "Toto",
    album: "Toto IV",
    loading: false,
    musicList: null,
    search: "",
};

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }
    updateSearch = (search) => {
        this.setState({ search });
    };

    componentDidMount() {
        let musicList = [];
        let object = {};
        this.setState({ loading: true });
        //console.log(this.props.route.params.context.musics());
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

    addMusic = () => {
        ////console.log(this.props.route.params.context);
        const { title, artist, album } = this.state;
        let obj = { title, artist, album };
        this.props.route.params.context.addMusic(obj);
    };

    removeMusic = (obj) => {
        this.props.route.params.context.removeMusic(obj);
    };

    render() {
        const { musicList } = this.state;
        const { search } = this.state;
        return (
            <SafeAreaView style={styles.safeView}>
                <StatusBar backgroundColor="black" barStyle="light-content" />
                <ImageBackground
                    source={require("../assets/400x800.png")}
                    style={styles.backgroundImage}
                >
                    <View style={styles.container}>
                        <SearchBar
                            placeholder="Type Here..."
                            onChangeText={this.updateSearch}
                            value={search}
                        />
                        <FormButton
                            onPress={this.addMusic}
                            buttonTitle="PRESS THIS"
                        />
                        <FlatList
                            data={musicList}
                            renderItem={({ item }) => (
                                <View style={styles.container}>
                                    <Text style={styles.item}>
                                        {item.title} by {item.artist}
                                    </Text>
                                </View>
                            )}
                        />
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

export default Search;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
    },

    container: {
        flex: 1,
        justifyContent: "center",
    },

    safeView: {
        flex: 1,
    },
});
