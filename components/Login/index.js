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
        const email1 = "admin@admin.com";
        const password1 = "admin1";
        this.context.doSignInWithEmailAndPassword(email1, password1).then(authUser => {
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
        const {username, password, terms} = this.state;
        console.log(this.props);
        return (
            <AppConsumer>
           { (context) => (
            <View style={styles.container} ref={(ref) => { this.context = context; }}>
                <Text>Login</Text>
              <TextInput
                placeholder = 'username'
                onChange={this.onChange}
                defaultValue = {username}
              />
              <TextInput
                secureTextEntry = {true}
                placeholder = 'password'
                onChange={this.onChange}
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
           )}
           </AppConsumer>
        );
    }
}

export default Login;