import React from "react";
import { StatusBar, StyleSheet, Text, View, SectionList } from "react-native";

const initialState = {};
class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Change Password</Text>
      </View>
    );
  }
}

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
