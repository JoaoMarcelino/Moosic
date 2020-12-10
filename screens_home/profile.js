import React from "react";
import { StatusBar, Text, View, StyleSheet } from "react-native";
import FormButton from "../components/FormButton";
class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Text>Profile</Text>
        <View style={styles.container}>
          <View style={styles.button}>
            <View style={styles.formButtons}>
              <FormButton
                onPress={() => {
                  this.props.navigation.navigate("SettingsStack");
                }}
                buttonTitle="Settings"
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
