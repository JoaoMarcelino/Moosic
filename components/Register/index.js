import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { CheckBox } from 'react-native-elements';
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
    email:'',
    password: '',
    passwordcheck: '',
    terms:0,
};

class Register extends React.Component{

    constructor(props){
        super(props);
        this.state = {...initialState};
    }

    onSubmit = event => {
        const {username, email, password, passwordcheck,terms} = this.state;
        //this.props.firebase.doCreateUserWithEmailAndPassword(email, password);
        this.props.navigation.navigate('HomeView')
    }

    render(){
        const {username, email, password, passwordcheck,terms} = this.state;
        console.log(this.props.firebase);
        return (
            <View style={styles.container}>
                <Text>Register</Text>
                <TextInput
                    placeholder = 'username'
                    onChangeText = {username}
                    defaultValue = {username}
                />
                <TextInput
                    placeholder = 'email'
                    onChangeText = {email}
                    defaultValue = {email}
                />
                <TextInput
                    secureTextEntry = {true}
                    placeholder = 'password'
                    onChangeText = {password}
                    defaultValue = {password}
                />
                <TextInput
                    secureTextEntry = {true}
                    placeholder = 'Confirm Password'
                    onChangeText = {passwordcheck}
                    defaultValue = {passwordcheck}
                />
                <TextInput
                    secureTextEntry = {true}
                    placeholder = ''
                    onChangeText = {passwordcheck}
                    defaultValue = {passwordcheck}
                />
                <CheckBox
                    title='Click Here'
                    checked={terms}
                />

            <Button
                onPress ={this.onSubmit}
                title="Register"
            />

            </View>
        );
    }
}

export default withFirebase(Register);