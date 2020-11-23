import React from 'react';
import * as firebase from 'firebase';


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
          doCreateUserWithEmailAndPassword: this.doCreateUserWithEmailAndPassword,
          doSignInWithEmailAndPassword: this.doSignInWithEmailAndPassword,
        }}>
          {this.props.children}
        </AppContext.Provider>
      )
    }
  }
