import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './navigation/routes';

import { AppProvider } from './components/Firebase/app-context';
import * as firebase from 'firebase';
import ApiKeys from './constants/apiKeys';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Stack = createStackNavigator();

class App extends React.Component{

  constructor(props){
    super(props);

    if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
  }

  render(){
    return (
      <AppProvider> 
        <NavigationContainer>
          <Routes/>
        </NavigationContainer>
      </AppProvider>
    );
  }

}
export default App;
