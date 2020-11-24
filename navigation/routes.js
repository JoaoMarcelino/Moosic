import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppConsumer } from "../components/Firebase/app-context";

import AuthStack from "./authStack";
import AppBottomTab from "./appBottomTab";

class Routes extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <AppConsumer>
        { (context) => (
        <NavigationContainer>
          {this.context.authCheck/*console.log(context.authUser)*/}
          {context.authUser ?  <AppBottomTab /> : <AuthStack />} 
        </NavigationContainer>
         )}
      </AppConsumer>
    );
  }

}

export default Routes;
