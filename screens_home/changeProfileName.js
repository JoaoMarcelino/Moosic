import React from "react";
import HeaderBar from "../components/HeaderBar";
import { SafeAreaView } from "react-native-safe-area-context";
import FormButton from "../components/FormButton";
import {
    ImageBackground,
    StatusBar,
    StyleSheet,
    TextInput,
    View,
} from "react-native";
import firebase from "firebase";

const initialState = { name: "", pass: "" };
class ChangeProfileName extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...initialState };
    }

    changeName(name, pass) {
        var user = firebase.auth().currentUser;
        this.props.route.params.context
            .doSignInWithEmailAndPassword(user.email, pass)
            .then((authUser) => {
                this.props.route.params.context.setUsername(name);
            })
            .catch((error) => {
                this.setState({ error });
                //console.log(error);
                alert("Wrong password");
            });
    }

    render() {
        return (
            <SafeAreaView style={styles.safeView}>
                <StatusBar backgroundColor="black" barStyle="light-content" />
                <ImageBackground
                    source={require("../assets/400x800.png")}
                    style={styles.backgroundImage}
                >
                    <HeaderBar
                        backgroundColor="#0D0D0D"
                        title="Change Profile Name"
                        screenProps={this.props}
                        secondIcon={null}
                        secondOnPress={null}
                    />
                    <View style={styles.container}>
                        <TextInput
                            style={styles.inputForm}
                            placeholder="New Profile Name"
                            placeholderStyle={styles.inputFormText}
                            placeholderTextColor="#0D0D0D"
                            onChangeText={(text) => (this.state.name = text)}
                        />
                        <TextInput
                            style={styles.inputForm}
                            placeholder="Password"
                            placeholderStyle={styles.inputFormText}
                            placeholderTextColor="#0D0D0D"
                            secureTextEntry={true}
                            onChangeText={(text) => (this.state.pass = text)}
                        />
                        <FormButton
                            onPress={() =>
                                this.changeName(
                                    this.state.name,
                                    this.state.pass
                                )
                            }
                            buttonTitle="Confirm"
                        />
                    </View>
                    <View style={{ flex: 1 }} />
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

export default ChangeProfileName;

//No font on placeholders cause of a react bug
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
    },

    container: {
        flex: 1,
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
