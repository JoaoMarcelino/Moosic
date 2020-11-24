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

    
    authCheck = () => {
        this.auth.onAuthStateChanged(function (user) {
            if (user) {
                this.setState({ user });
            } else {
                this.setState({ user: null });
            }
        })
    }


    doSignOut = () => this.auth.signOut();
  
  
    render() {
      return (
        <AppContext.Provider value={{
          personData: this.state.personData,
          authCheck: this.authCheck,
          authUser: this.state.user,
          doCreateUserWithEmailAndPassword: this.doCreateUserWithEmailAndPassword,
          doSignInWithEmailAndPassword: this.doSignInWithEmailAndPassword,
        }}>
          {this.props.children}
        </AppContext.Provider>
      )
    }
  }