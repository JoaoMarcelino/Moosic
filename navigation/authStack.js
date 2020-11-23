import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import StartScreen from "../screens/StartScreen";

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
        component={Authentication}
        options={{ title: 'Welcome' }}
        />
        <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Login' }}
        />
        <Stack.Screen
        name="Register"
        component={Register}
        options={{ title: 'Register' }}
        />
        <Stack.Screen
        name="HomeView"
        component={HomeView}
        options={{ title: 'Home' }}
        />
    </Stack.Navigator>
  );
};

export default AuthStack;