import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppConsumer } from "../components/Firebase/app-context";

import AuthStack from "./authStack";
import AppBottomTab from "./appBottomTab";

const initialState = {
    check: null,
};

class Routes extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...initialState };
    }

    //DOESNT DO SHIT
    checkAuth() {
        var check = null;
        this.props.context.auth.onAuthStateChanged(function (user) {
            if (user) {
                check = user;
            } else {
                check = null;
            }
        });
        console.log("inside", check);
        return check;
    }

    render() {
        return (
            <NavigationContainer>
                {this.check ? (
                    <AppBottomTab />
                ) : (
                    <AuthStack context={this.props.context} />
                )}
            </NavigationContainer>
        );
    }
}

export default Routes;
