import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';
import Firebase from '../Firebase/firebase';
import { CheckBox } from 'react-native-elements';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});

const initialState = {
    username: '',
    password: '',
    terms: 0,
};

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {...initialState};
    }

    onSubmit = event => {
        const {username, password, terms} = this.state;
        //this.props.firebase.doSignInWithEmailAndPassword(username, password);
        this.props.navigation.navigate('HomeView')
    }

    render(){
        const {username, password, terms} = this.state;
        console.log(this.props);
        return (
            <View style={styles.container}>
                <Text>Login</Text>
              <TextInput
                placeholder = 'username'
                onChangeText = {username}
                defaultValue = {username}
              />
              <TextInput
                secureTextEntry = {true}
                placeholder = 'password'
                onChangeText = {password}
                defaultValue = {password}
              />
                <CheckBox
                    title='Click Here'
                    checked={terms}
                />

            <Button
                onPress ={this.onSubmit}
                title="Login"
            />

            </View>
        );
    }
}

export default withFirebase(Login);