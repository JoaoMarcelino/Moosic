import React from "react";
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import SettingsButton from "../components/SettingsButton";
import SocialButton from "../components/SocialButton";

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ImageBackground
        source={require("../assets/400x800.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <StatusBar backgroundColor="black" barStyle="light-content" />
          <SocialButton
            onPress={() => {
              alert("Spotify!");
            }}
            buttonTitle="Link Your Spotify Account"
            btnType="spotify"
            color="#000"
            backgroundColor="#f2f2f2"
          />
          <SettingsButton
            buttonTitle="Change Profile Name"
            onPress={() => {
              this.props.navigation.navigate("ChangeProfileName");
            }}
          />
          <SettingsButton
            buttonTitle="Change Password"
            onPress={() => {
              this.props.navigation.navigate("ChangePassword");
            }}
          />
          <SettingsButton
            buttonTitle="Credits"
            onPress={() => {
              this.props.navigation.navigate("Credits");
            }}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
});
