import React from "react";
import { Platform } from "react-native";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";
import SpotifyButton from "../components/SpotifyButton";
import * as WebBrowser from "expo-web-browser";

import {
    Image,
    ImageBackground,
    Linking,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";

WebBrowser.maybeCompleteAuthSession();

class Authentication extends React.Component {
    constructor(props) {
        super(props);
    }

    onSignInButtonClick() {
        if (Platform.OS == "web") {
            window.open(
                "http://localhost:8888/login",
                "firebaseAuth",
                "height=315,width=400"
            );
        } else {
            Linking.addEventListener(
                "http://localhost:8888/login",
                this.props.navigation.navigate("HomeView")
            );
        }
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
                        <View style={styles.pageHeader}>
                            <Text style={styles.pageHeaderText}>Moosic</Text>
                        </View>
                        <Image
                            source={require("../assets/filled.png")}
                            style={styles.logo}
                        />

                        <View style={styles.buttons}>
                            <View style={styles.formButtons}>
                                <FormButton
                                    onPress={() => {
                                        this.props.navigation.navigate("Login");
                                    }}
                                    buttonTitle="Login"
                                />
                                <FormButton
                                    onPress={() => {
                                        this.props.navigation.navigate(
                                            "Register"
                                        );
                                    }}
                                    buttonTitle="Register"
                                />
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate("ContactUs");
                            }}
                        >
                            <Text style={styles.contactUs}>Contact Us</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

export default Authentication;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
    },

    buttons: {
        flex: 1,
        alignContent: "center",
        justifyContent: "space-evenly",
    },

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 36,
    },

    formButtons: {
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "space-evenly",
    },

    logo: {
        flex: 2.5,
        height: 250,
        width: 250,
        resizeMode: "contain",
    },

    pageHeader: {
        backgroundColor: "#0D0D0D",
        borderRadius: 40,
        borderColor: "#f2f2f2",
        borderStyle: "solid",
        borderWidth: 3,
        height: 57,
        width: 330,
        justifyContent: "center",
        alignItems: "center",
    },

    pageHeaderText: {
        fontFamily: "Courier Prime Bold",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 36,
        lineHeight: 40,
        color: "#f2f2f2",
    },
    contactUs: {
        fontFamily: "Courier Prime Bold",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 40,
        color: "#f2f2f2",
        textDecorationLine: "underline",
    },

    safeView: {
        flex: 1,
    },
});
