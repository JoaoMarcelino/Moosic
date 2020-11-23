import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { CheckBox } from 'react-native-elements';


import { AppConsumer } from '../components/Firebase/app-context';


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
        this.context.doCreateUserWithEmailAndPassword(email, password).then(authUser => {
            this.setState({ ...initialState });
            this.props.navigation.navigate('HomeView')
          })
          .catch(error => {
            this.setState({ error });
            console.log(error);
          });
            
        event.preventDefault();
    }
    /*
    onChange = (name, event) => {
        this.setState({ [name]: event.target.value });
        console.log([name],  event.target.value );
      };
      */
    render(){
        const {username, email, password, passwordcheck,terms} = this.state;
        return (
            <AppConsumer>
            {(context) => (
            <View style={styles.container} ref={(ref) => { this.context = context; }}>
                <Text>Register</Text>
                <TextInput
                    name='username'
                    placeholder = 'username'
                    onChangeText={text => this.state.username = text}
                    defaultValue = {username}

                />
                <TextInput
                    name='email'
                    placeholder = 'email'
                    onChangeText={text => this.state.email = text}
                    defaultValue = {email}
                />
                <TextInput
                    name='password'
                    secureTextEntry = {true}
                    placeholder = 'password'
                    onChangeText={text => this.state.password = text}
                    defaultValue = {password}
                />
                <TextInput
                    name='passwordcheck'
                    secureTextEntry = {true}
                    placeholder = 'Confirm Password'
                    onChangeText={text => this.state.passwordcheck = text}
                    defaultValue = {passwordcheck}
                />
                <CheckBox
                    name='terms'
                    title='Click Here'
                    onChangeText={text => text ? false : true}
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