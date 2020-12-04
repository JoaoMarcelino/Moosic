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

    // *** User API ***


  musics = () => this.db.collection(uid).collection("musics").get();
      

  addMusic = (itemObj) => {
    const uid = this.auth.currentUser.uid;
    console.log("here",uid);
    this.db
      .collection('User')
      .doc(uid)
      .collection("Music")
      .add(itemObj)
      .catch((err) => alert(err));
  };

  removeMusic = (itemObj) => {
    
    console.log(itemObj);
    this.db
    .collection({uid})
      .collection("Music").doc(itemObj.id).delete().then(function() {
        console.log("Document successfully deleted!");
        window.location.reload(false);
      }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
    

  }

    render() {
      return (
        <AppContext.Provider value={{
          personData: this.state.personData,
          auth: this.auth,
          doCreateUserWithEmailAndPassword: this.doCreateUserWithEmailAndPassword,
          doSignInWithEmailAndPassword: this.doSignInWithEmailAndPassword,
          doSignOut: this.doSignOut,

          addMusic: this.addMusic,
          removeMusic: this.removeMusic,
        }}>
          {this.props.children}
        </AppContext.Provider>
      )
    }
  }