import { CheckBox } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FormButton from "../components/FormButton";
import React from "react";

import {
    ImageBackground,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

class ContactUs extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SafeAreaView style={styles.safeView}>
                <StatusBar backgroundColor="black" barStyle="light-content" />
                <ImageBackground
                    source={require("../assets/400x800.png")}
                    style={styles.backgroundImage}
                >
                    <View style={styles.container}>
                        <Text style={styles.text}>
                            Informações sobre contacto
                        </Text>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

export default ContactUs;

//No font on placeholders cause of a react bug
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
    },

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 36,
    },

    text: {
        fontFamily: "Courier Prime Bold",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 40,
        color: "#f2f2f2",
    },

    safeView: {
        flex: 1,
    },
});
