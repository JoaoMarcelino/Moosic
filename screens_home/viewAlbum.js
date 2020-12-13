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
    this.state = {...props.route.params.item}
  }

  render(){
  let item = this.state;
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
          if (item.listened < item.numberTracks){
            item.listened ++;
            this.setState(context.setListened(item));
          }else{
            console.log("WTF");
          }
          
        }}
        buttonTitle="Plus"
      />
      <FormButton
        onPress={() => {
          if(item.listened>0){
            item.listened--;
            this.setState(context.setListened(item));
          }
          
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
