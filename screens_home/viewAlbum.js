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

import * as Progress from 'react-native-progress';

import {Surface, Shape} from '@react-native-community/art';


class ViewAlbum extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    let item = this.props.route.params.item;
  let context = this.props.route.params.context;
  return (
    <View style={styles.container}>
      <Text>Title: {item.title}</Text>
      <Text>Artist: {item.artist}</Text>
      <Text>Year: {item.year}</Text>
      <Text>Number of Tracks: {item.numberTracks}</Text>
      <Text>Progress: {item.listened}</Text>
      <Progress.Bar 
        progress={item.listened/item.numberTracks} 
        width={200}
        borderColor= "black"
        color = "green"
      />
      <FormButton
        onPress={() => {
          item.listened+=item.listened;
          context.setListened(item);
        }}
        buttonTitle="Plus"
      />
      <FormButton
        onPress={() => {
          item.listened--;
          context.setListened(item);

        }}
        buttonTitle="Minus"
      />
      
    </View>
  );
  }
}



export default ViewAlbum;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
