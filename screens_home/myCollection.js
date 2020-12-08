import React from "react";
import { StatusBar, Text, View, StyleSheet } from "react-native";

class MyCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Text>My Collection</Text>
      </View>
    );
  }
}

export default MyCollection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
