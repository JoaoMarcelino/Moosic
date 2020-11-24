import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppConsumer } from "../components/Firebase/app-context";

import AuthStack from "./authStack";
import AppBottomTab from "./appBottomTab";

const initialState = {
  check:null,

}


class Routes extends React.Component{
  constructor(props){
    super(props);
    this.state = {...initialState};
  }

  componentDidMount(){
    var check =this.state;
    this.context.auth.onAuthStateChanged(function(user) {
        if (user) {
        //this.setState({ check });  
        check = user;
        } else {
        check = null;
        }
      
    })
    this.setState({check});
  }


  
  render(){
    return (
      <AppConsumer>
        { (context) => (
        <NavigationContainer ref={(ref) => { this.context = context; }} >
          {this.state.check ? <AppBottomTab /> :  <AuthStack />}
        </NavigationContainer>
         )}
      </AppConsumer>
    );
  }

}

export default Routes;
