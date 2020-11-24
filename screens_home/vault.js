import React from "react";
import { Text, View, StyleSheet } from "react-native";

class Vault extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Vault</Text>
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
