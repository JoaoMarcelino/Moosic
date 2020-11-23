import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppContext } from "../components/Firebase/app-context";

import AuthStack from "./authStack";
import AppBottomTab from "./appBottomTab";

const Routes = () => {
  const { user, setUser } = useContext(AppContext);
  const [initializing, setInitializing] = useState(true);

  setUser(true);

  return (
    <NavigationContainer>
      {user ? <AppBottomTab /> : <AuthStack />} 
    </NavigationContainer>
  );
};

export default Routes;
