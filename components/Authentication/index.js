import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { withFirebase } from '../Firebase';


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
      window.open('http://localhost:8888/login', 'firebaseAuth', 'height=315,width=400');
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
                onPress ={() => {this.onSignInButtonClick();}}
                title="Login with Spotify"
              />

              <StatusBar style="auto" />
            </View>
        );
    }
}

export default Authentication;