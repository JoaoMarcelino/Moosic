import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { CheckBox } from 'react-native-elements';


import { AppConsumer } from './../Firebase/app-context';


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
    terms:false,
};

class Register extends React.Component{

    constructor(props){
        super(props);
        this.state = {...initialState};
    }

    onSubmit = event => {
        
        const {username, email, password, passwordcheck,terms} = this.state;
        console.log("EMAIL:",this.state,email, password);
        const email1 = "admin@admin.com";
        const password1 = "admin1";
        this.context.doCreateUserWithEmailAndPassword(email1, password1).then(authUser => {
            console.log("hey");
            this.setState({ ...initialState });
            this.props.navigation.navigate('HomeView')
          })
          .catch(error => {
            this.setState({ error });
            console.log(error);
          });
            
        event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.defaultValue });
        console.log("EMAIL:",event.target);
      };

    render(){
        const {username, email, password, passwordcheck,terms} = this.state;
        return (
            <AppConsumer>
            {(context) => (
            <View style={styles.container} ref={(ref) => { this.context = context; }}>
                <Text>Register</Text>
                <TextInput
                    placeholder = 'username'
                    onChange={this.onChange}
                    value = {username}

                />
                <TextInput
                    placeholder = 'email'
                    onChange={this.onChange}
                    defaultValue = {email}
                />
                <TextInput
                    secureTextEntry = {true}
                    placeholder = 'password'
                    onChange={this.onChange}
                    defaultValue = {password}
                />
                <TextInput
                    secureTextEntry = {true}
                    placeholder = 'Confirm Password'
                    onChange={this.onChange}
                    defaultValue = {passwordcheck}
                />
                <CheckBox
                    title='Click Here'
                    onChange={this.onChange}
                    checked={terms}
                />

            <Button
                onPress ={this.onSubmit}
                title="Register"
            />
            </View>
            )}
            </AppConsumer>
        );
    }
}

export default Register;