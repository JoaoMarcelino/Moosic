import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "./AuthProvider";
//import auth from "@react-native-firebase/auth";

import AuthStack from "./AuthStack";
import AppBottomTab from "./AppBottomTab";

const Routes = () => {
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  /*
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  */
  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <AppBottomTab /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
