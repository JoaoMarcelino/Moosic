import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class HomeView extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={styles.container}>
              <Text>New Releases</Text>
              <Text>Not Finished Yet</Text> 
              <Text>Not Started</Text>
              <StatusBar style="auto" />
            </View>
        );
    }
}

export default HomeView;