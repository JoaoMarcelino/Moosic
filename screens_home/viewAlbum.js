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

const ViewAlbum = (nav) => {
  let item = nav.route.params.item;
  return (
    <View style={styles.container}>
      <Text>Title: {item.title}</Text>
      <Text>Artist: {item.artist}</Text>
      <Text>Year: {item.year}</Text>
      <Text>Number of Tracks: {item.numberTracks}</Text>
      <Text>Progress: {item.listened}</Text>
    </View>
  );
};

export default ViewAlbum;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
