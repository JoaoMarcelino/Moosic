import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';


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
};

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {...initialState};
    }

    onSubmit = event => {
        this.props.firebase.doSignInWithEmailAndPassword(username, password);
    }

    render(){
        const {username, password} = this.state;
        return (
            <View style={styles.container}>
                <Text>Login</Text>
              <Text>Username</Text>
              <TextInput
                placeholder = 'username'
                onChangeText = {username}
                defaultValue = {username}
              />
              <Text>Password</Text>
              <TextInput
                secureTextEntry = {true}
                placeholder = 'password'
                onChangeText = {password}
                defaultValue = {password}
              />

            <Button
                onPress ={this.onSubmit}
                title="Login"
            />

            </View>
        );
    }
}

export default Login;