import React from "react";
import {
  FlatList,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import FormButton from "../components/FormButton";
import HeaderBar from "../components/HeaderBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { functions } from "firebase";

const ViewMusic = (nav) => {
  let item = nav.route.params.item;
  console.log(item);
  return (
    <View style={styles.container}>
      <Text>Title: {item.title}</Text>
      <Text>Artist: {item.artist}</Text>
      <Text>Album: {item.album}</Text>
    </View>
  );
};

export default ViewMusic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
