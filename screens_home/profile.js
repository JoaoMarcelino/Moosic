import React from "react";
import {
    ImageBackground,
    StatusBar,
    StyleSheet,
    View,
    Text,
} from "react-native";
import FormButton from "../components/FormButton";
import firebase from "firebase";
import { SafeAreaView } from "react-native-safe-area-context";

const initialState = { profileName: "" };
class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...initialState };
    }

    render() {
        //console.log(firebase.auth().currentUser);
        return (
            <SafeAreaView style={styles.safeView}>
                <StatusBar backgroundColor="black" barStyle="light-content" />
                <ImageBackground
                    source={require("../assets/400x800.png")}
                    style={styles.backgroundImage}
                >
                    <View style={styles.container}>
                        <View style={styles.container}>
                            <View style={styles.button}>
                                <View style={styles.formButtons}>
                                    <Text>
                                        {
                                            firebase.auth().currentUser
                                                .displayName
                                        }
                                    </Text>
                                    <FormButton
                                        onPress={() => {
                                            this.props.navigation.navigate(
                                                "SettingsStack"
                                            );
                                        }}
                                        buttonTitle="Settings"
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

export default Profile;

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

    safeView: {
        flex: 1,
    },
});
