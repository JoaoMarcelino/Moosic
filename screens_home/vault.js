import React from "react";
import { StatusBar, Text, View, StyleSheet } from "react-native";
import FormButton from "../components/FormButton";
import AddAlbum from "../screens_home/addAlbum";
import AddMusic from "../screens_home/addMusic";
import VaultStack from "../navigation/vaultStack";
global.vaultSwitch = 1;
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

class Vault extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Text>Vault</Text>

        <View style={styles.container}>
          <View style={styles.button}>
            <View style={styles.formButtons}>
              <FormButton
                onPress={() => {
                  this.props.navigation.navigate("Add Music");
                }}
                buttonTitle="Add Music"
              />
              <FormButton
                onPress={() => {
                  this.props.navigation.navigate("Add Album");
                }}
                buttonTitle="Add Album"
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Vault;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
