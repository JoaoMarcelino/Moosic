import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import LoginScreen from "../screens_auth/login";
import SignupScreen from "../screens_auth/register";
import AuthScreen from "../screens_auth/authentication";

const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch == null) {
    return null;
  } else if (isFirstLaunch == true) {
    routeName = "Onboarding";
  } else {
    routename = "Start";
  }

  return (
    <Stack.Navigator> 
        <Stack.Screen
        name="Authentication"
        component={AuthScreen}
        options={{ title: 'Welcome' }}
        />
        <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: 'Login' }}
        />
        <Stack.Screen
        name="Register"
        component={SignupScreen}
        options={{ title: 'Register' }}
        />
    </Stack.Navigator>
  );
};

export default AuthStack;