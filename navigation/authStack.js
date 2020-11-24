import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens_auth/login";
import SignupScreen from "../screens_auth/register";
import AuthScreen from "../screens_auth/authentication";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={"Authentication"}>
      <Stack.Screen
        name="Authentication"
        component={AuthScreen}
        options={{ title: "Welcome" }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Login" }}
      />
      <Stack.Screen
        name="Register"
        component={SignupScreen}
        options={{ title: "Register" }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
