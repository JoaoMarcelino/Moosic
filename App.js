import React from "react";
import Providers from "./navigation";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import * as firebase from "firebase";
import apiKeys from "./config/apiKeys";

let customFonts = {
  "Courier Prime Regular": require("./assets/fonts/CourierPrime-Regular.ttf"),
  "Courier Prime Bold": require("./assets/fonts/CourierPrime-Bold.ttf"),
  "Inter Regular": require("./assets/fonts/Inter-Regular.ttf"),
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    if (!firebase.apps.length) {
      firebase.initializeApp(apiKeys.FirebaseConfig);
    }
  }

  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    
  }

  render() {
    if (this.state.fontsLoaded) {
      return <Providers />;
    } else {
      return <AppLoading />;
    }
  }
}
