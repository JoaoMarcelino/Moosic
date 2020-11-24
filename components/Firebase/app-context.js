import React from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';



const initialState = {
    user: null,
    personData: { },
};

const AppContext = React.createContext();


export const AppConsumer = AppContext.Consumer;



export class AppProvider extends React.Component {

    constructor(props) {
      super(props);
      this.state = initialState;

      this.auth = firebase.auth();
      this.db = firebase.firestore();
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  


    doSignOut = () => this.auth.signOut();
  
  
    render() {
      return (
        <AppContext.Provider value={{
          personData: this.state.personData,
          auth: this.auth,
          doCreateUserWithEmailAndPassword: this.doCreateUserWithEmailAndPassword,
          doSignInWithEmailAndPassword: this.doSignInWithEmailAndPassword,
          doSignOut: this.doSignOut,
        }}>
          {this.props.children}
        </AppContext.Provider>
      )
    }
  }