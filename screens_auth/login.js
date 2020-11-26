import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
//import { CheckBox } from 'react-native-elements';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const initialState = {
  email: "",
  password: "",
  terms: 0,
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
    this.context = this.props.route.params.context;
  }

  onSubmit = (event) => {
    const { email, password, terms } = this.state;

    const email1 = "admin@admin.com";
    const password1 = "admin1";

    this.props.route.params.context
      .doSignInWithEmailAndPassword(email1, password1)
      .then((authUser) => {
        console.log("hey");
        this.setState({ ...initialState });
        this.props.navigation.navigate('AppBottomTab');
      })
      .catch((error) => {
        this.setState({ error });
        console.log(error);
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.defaultValue });
  };

  render() {
    const { email, password, terms } = this.state;
    return (
          <View style={styles.container}>
            <Text>Login</Text>
            <TextInput
              placeholder="email"
              onChangeText={(text) => (this.state.email = text)}
              defaultValue={email}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="password"
              onChangeText={(text) => (this.state.password = text)}
              defaultValue={password}
            />
            <Button onPress={this.onSubmit} title="Login" />
          </View>
    );
  }
}

export default Login;
