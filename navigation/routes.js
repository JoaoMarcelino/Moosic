import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "./authStack";
import AppBottomTab from "./appBottomTab";

const Routes = () => {
  const user = false;
  return (
    <NavigationContainer>
      {user ? <AppBottomTab /> : <AuthStack />} 
    </NavigationContainer>
  );
};

export default Routes;
