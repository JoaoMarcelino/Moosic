import React, { useContext, useState } from "react";
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
import { AuthContext } from "../navigation/AuthProvider";

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const { register } = useContext(AuthContext);

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
          <Text style={styles.pageHeaderText}>Sign Up</Text>
        </View>
        <FormInput
          labelValue={name}
          placeholderText="Name"
          onChangeText={(userName) => setName(userName)}
        />
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
        <FormInput
          labelValue={confirmPassword}
          placeholderText="Confirm Password"
          onChangeText={() => {}}
          secureTextEntry={true}
        />
        <FormButton
          buttonTitle="Sign Up"
          onPress={() => register(email, password)}
        />
      </View>
    </ImageBackground>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
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
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 35,
    justifyContent: "center",
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: "400",
    fontFamily: "Inter Regular",
    color: "grey",
  },
});
