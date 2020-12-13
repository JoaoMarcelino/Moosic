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
import { functions } from "firebase";
import { CheckBox } from "react-native-elements";

class ViewMusic extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...props.route.params.item };
    }
    render() {
        let item = this.state;
        let context = this.props.route.params.context;
        return (
            <SafeAreaView style={styles.safeView}>
                <StatusBar backgroundColor="black" barStyle="light-content" />
                <ImageBackground
                    source={require("../assets/400x800.png")}
                    style={styles.backgroundImage}
                >
                    <View style={styles.container}>
                        <Text style={styles.text}>Title: {item.title}</Text>
                        <Text style={styles.text}>Artist: {item.artist}</Text>
                        <Text style={styles.text}>Album: {item.album}</Text>
                        <Text style={styles.text}>
                            Listened: {"" + item.listened}
                        </Text>
                        <CheckBox
                            title={"Listened"}
                            checked={item.listened}
                            onPress={() => {
                                if (item.listened) item.listened = false;
                                else item.listened = true;
                                this.setState(context.setListenedMusic(item));
                            }}
                            containerStyle={styles.checkBox}
                            textStyle={styles.textCheckBox}
                            size={36}
                            checkedColor="#f2f2f2"
                        />
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

export default ViewMusic;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
    },

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        color: "#F2F2F2",
    },

    safeView: {
        flex: 1,
    },

    // desculpa @Jospy estar a fazer css outra vez, foi so pq estava mesmo feia a default checkbox. Altera o q precisares. <3 ass: @goncalo
    // feel free para mudar tamanhos e cores e o que quiseres
    checkBox: {
        backgroundColor: "rgba(0,0,0,0)",
        width: 200,
        height: 20,
        borderWidth: 0,
    },

    textCheckBox: {
        color: "#F2F2F2",
        fontSize: 24,
    },
});

/*<HeaderBar
					backgroundColor="#0D0D0D"
					title={item.title}
					screenProps={this.props}
					addOnPress={null}
				/>*/
