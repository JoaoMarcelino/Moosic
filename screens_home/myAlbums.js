import React from "react";
import { StatusBar, Text, View, StyleSheet } from "react-native";

class MyAlbums extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Text>My Albums</Text>
      </View>
    );
  }
}

export default MyAlbums;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
