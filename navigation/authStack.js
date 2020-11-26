import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens_auth/login";
import SignupScreen from "../screens_auth/register";
import AuthScreen from "../screens_auth/authentication";

import AppBottomTab from "./appBottomTab";

<AppBottomTab />



const Stack = createStackNavigator();

const AuthStack = (context) => {
  const Auth = <AuthScreen context={context}/>
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
        initialParams={context}
      />
      <Stack.Screen
        name="Register"
        component={SignupScreen}
        options={{ title: "Register" }}
        initialParams={context}
      />
      <Stack.Screen
        name="AppBottomTab"
        component={AppBottomTab}
        options = {{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
