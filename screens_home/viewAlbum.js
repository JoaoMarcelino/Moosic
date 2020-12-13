import React from "react";
import {
    FlatList,
    ImageBackground,
    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from "react-native";
import FormButton from "../components/FormButton";
import HeaderBar from "../components/HeaderBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { functions } from "firebase";

import * as Progress from "react-native-progress";
import FontAwesome from "react-native-vector-icons/FontAwesome";

class ViewAlbum extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...props.route.params.item };
    }

    render() {
        let item = this.state;
        let context = this.props.route.params.context;
        return (
            <View style={styles.container}>
                <Text>Title: {item.title}</Text>
                <Text>Artist: {item.artist}</Text>
                <Text>Year: {item.year}</Text>
                <Text>Number of Tracks: {item.numberTracks}</Text>
                <Text>Progress: {item.listened}</Text>
                <Progress.Bar
                    progress={item.listened / item.numberTracks}
                    width={200}
                    borderColor={"#0D0D0D"}
                    color={"#55D9C1"}
                />
                <View style={styles.plusminus}>
                    <TouchableOpacity
                        style={{ padding: 25 }}
                        onPress={() => {
                            if (item.listened > 0) {
                                item.listened--;
                                this.setState(context.setListenedAlbum(item));
                            }
                        }}
                    >
                        <FontAwesome
                            name={"minus"}
                            size={20}
                            color={"#55D9C1"}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ padding: 25 }}
                        onPress={() => {
                            if (item.listened < item.numberTracks) {
                                item.listened++;
                                this.setState(context.setListenedAlbum(item));
                            }
                        }}
                    >
                        <FontAwesome
                            name={"plus"}
                            size={20}
                            color={"#55D9C1"}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default ViewAlbum;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    // desculpa ter tentado fazer css zé, podes apagar para fazer melhor. ass: @goncalo
    plusminus: {
        flex: 0.2,
        flexDirection: "row",
        width: "30%",
        height: 40,
        alignItems: "center",
        justifyContent: "space-between",
    },
});
