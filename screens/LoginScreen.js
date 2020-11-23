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
import FormInput from "../components/FormInput";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <ImageBackground
      source={require("../assets/400x800.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.pageHeader}>
          <FontAwesome.Button
            style={{ flex: 1, alignSelf: "flex-start" }}
            name="times"
            size={20}
            backgroundColor="rgba(0,0,0,0)"
            color="#0d0d0d"
            onPress={() => navigation.navigate("Start")}
          />
          <Text style={styles.pageHeaderText}>Log In</Text>
        </View>
        <FormInput
          labelValue={email}
          placeholderText="Email"
          onChangeText={(userEmail) => setEmail(userEmail)}
        />
        <FormInput
          labelValue={password}
          placeholderText="Password"
          onChangeText={(userPassword) => setPassword(userPassword)}
          secureTextEntry={true}
        />
        <FormButton
          buttonTitle="Log In"
          onPress={() => alert("Log in clicked!")}
        />
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    height: 150,
    width: 150,
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
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
    fontFamily: "Inter Regular",
  },
  pageHeader: {
    backgroundColor: "#f2f2f2",
    borderRadius: 40,
    borderColor: "#0d0d0d",
    borderStyle: "solid",
    borderWidth: 3,
    height: 57,
    width: 330,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  pageHeaderText: {
    fontFamily: "Courier Prime Bold",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: 40,
    color: "#358C7C",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
