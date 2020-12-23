import React, { useEffect, View } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Animated } from "react-native";

import LoginScreen from "../screens_auth/login";
import SignupScreen from "../screens_auth/register";
import AuthScreen from "../screens_auth/authentication";
import ContactUsScreen from "../screens_auth/contactus";

import AppBottomTab from "./appBottomTab";

<AppBottomTab />;

const Stack = createStackNavigator();

const AuthStack = (navigation) => {
    const Auth = <AuthScreen navigation={navigation} />;
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: forFade,
            }}
            initialRouteName={"Authentication"}
        >
            <Stack.Screen
                name="Authentication"
                component={AuthScreen}
                options={{
                    title: "Welcome",
                    cardStyle: {
                        backgroundColor: "black",
                    },
                }}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    title: "Welcome",
                    cardStyle: {
                        backgroundColor: "black",
                    },
                }}
                initialParams={navigation}
            />
            <Stack.Screen
                name="Register"
                component={SignupScreen}
                options={{
                    title: "Welcome",
                    cardStyle: {
                        backgroundColor: "black",
                    },
                }}
                initialParams={navigation}
            />
            <Stack.Screen
                name="ContactUs"
                component={ContactUsScreen}
                options={{
                    title: "Welcome",
                    cardStyle: {
                        backgroundColor: "black",
                    },
                }}
            />
            <Stack.Screen
                name="AppBottomTab"
                component={AppBottomTab}
                options={{
                    title: "Welcome",
                    cardStyle: {
                        backgroundColor: "black",
                    },
                }}
                initialParams={navigation}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;

const forFade = ({ current }) => ({
    cardStyle: {
        opacity: current.progress,
    },
});
