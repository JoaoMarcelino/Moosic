import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  StyleSheet,
  ImageBackground,
} from "react-native";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";

const StartScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <ImageBackground
      source={require("../assets/400x800.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageHeaderText}>Moosic</Text>
        </View>
        <Image source={require("../assets/filled.png")} style={styles.logo} />
        <View style={styles.buttons}>
          <FormButton
            buttonTitle="Sign Up"
            onPress={() => navigation.navigate("Signup")}
          />
          <FormButton
            buttonTitle="Log In"
            onPress={() => navigation.navigate("Login")}
          />
          <SocialButton
            buttonTitle="Connect with Spotify"
            btnType="spotify"
            color="#000"
            backgroundColor="#f2f2f2"
            onPress={() => {}}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    height: 250,
    width: 250,
    resizeMode: "cover",
  },
  text: {
    fontFamily: "Inter Regular",
    fontSize: 28,
    marginBottom: 10,
    color: "#051d5f",
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
    fontFamily: "Inter Regular",
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
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  buttons: {
    flex: 1,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
});
