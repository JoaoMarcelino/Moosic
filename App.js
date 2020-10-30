import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApiKeys from './constants/ApiKeys';
import * as firebase from 'firebase';
import Authentication from './components/Authentication';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      firebase: 1,
    };

        
    if (!firebase.apps.length){
      firebase.initializeApp(ApiKeys.FirebaseConfig);

    };
  }

  render(){
    if (this.state.firebase){
      return (
        <Authentication/>
      );
    }
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

}
export default App;
