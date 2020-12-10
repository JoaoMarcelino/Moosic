import React from "react";
import { StatusBar, StyleSheet, Text, View, SectionList } from "react-native";

const initialState = {};
class Credits extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Nomes dos Mongos que fizeram isto</Text>
      </View>
    );
  }
}

export default Credits;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
