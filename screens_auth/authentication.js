import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Linking} from 'react-native';
import HomeView from '../screens_home/homeView';
import {Platform} from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});

class Authentication extends React.Component{

    constructor(props){
        super(props);

    }

    onSignInButtonClick() {
      // Open the Auth flow in a popup.
      if(Platform.OS == 'web'){
        window.open('http://localhost:8888/login', 'firebaseAuth', 'height=315,width=400');
      }else {
        Linking.addEventListener('http://localhost:8888/login',this.props.navigation.navigate('HomeView'));
      }
  
    };

    render(){
        return (
            <View style={styles.container}>
              <Button
                onPress ={() => {this.props.navigation.navigate('Login');}}
                title="Login"
                
              />
               <Button
                onPress ={() => {this.props.navigation.navigate('Register')}}
                title="Register"

              />
               <Button
                onPress ={() => {this.onSignInButtonClick()}}
                title="Login with Spotify"
              />

              <StatusBar style="auto" />
            </View>
        );
    }
}

export default Authentication;
