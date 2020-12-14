import React from "react";
import * as firebase from "firebase";
import "firebase/firestore";

const initialState = {
    user: null,
    personData: {},
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

    addUsername = (itemObj) => {
        const uid = this.auth.currentUser.uid;
        this.db
            .collection("User")
            .doc(uid)
            .collection("UserInfo")
            .add(itemObj)
            .catch((err) => alert(err));
    };

    setUsername = (itemObj) => {
        const uid = this.auth.currentUser.uid;
        this.db
            .collection("User")
            .doc(uid)
            .collection("UserInfo")
            .doc(itemObj.id)
            .set(itemObj);
    };

    albums = () => {
        const uid = this.auth.currentUser.uid;
        return this.db.collection("User").doc(uid).collection("Album").get();
    };

    addAlbum = (itemObj) => {
        const uid = this.auth.currentUser.uid;
        this.db
            .collection("User")
            .doc(uid)
            .collection("Album")
            .add(itemObj)
            .catch((err) => alert(err));
    };

    removeAlbum = (itemObj) => {
        const uid = this.auth.currentUser.uid;
        //console.log(itemObj);
        this.db
            .collection("User")
            .doc(uid)
            .collection("Album")
            .doc(itemObj.id)
            .delete()
            .then(function () {
                //console.log("Document successfully deleted!");
                //window.location.reload(false);
            })
            .catch(function (error) {
                console.error("Error removing document: ", error);
            });
    };

    setListenedAlbum = (itemObj) => {
        const uid = this.auth.currentUser.uid;
        this.db
            .collection("User")
            .doc(uid)
            .collection("Album")
            .doc(itemObj.id)
            .set(itemObj);

        return itemObj;
    };

    setListenedMusic = (itemObj) => {
        const uid = this.auth.currentUser.uid;
        this.db
            .collection("User")
            .doc(uid)
            .collection("Music")
            .doc(itemObj.id)
            .set(itemObj);

        return itemObj;
    };

    musics = () => {
        const uid = this.auth.currentUser.uid;
        return this.db.collection("User").doc(uid).collection("Music").get();
    };

    addMusic = (itemObj) => {
        const uid = this.auth.currentUser.uid;
        this.db
            .collection("User")
            .doc(uid)
            .collection("Music")
            .add(itemObj)
            .catch((err) => alert(err));
    };

    removeMusic = (itemObj) => {
        const uid = this.auth.currentUser.uid;
        //console.log(itemObj);
        this.db
            .collection("User")
            .doc(uid)
            .collection("Music")
            .doc(itemObj.id)
            .delete()
            .then(function () {
                //console.log("Document successfully deleted!");
                //window.location.reload(false);
            })
            .catch(function (error) {
                console.error("Error removing document: ", error);
            });
    };

    artists = () => {
        const uid = this.auth.currentUser.uid;
        return this.db.collection("User").doc(uid).collection("Artist").get();
    };

    addArtist = (itemObj) => {
        const uid = this.auth.currentUser.uid;
        this.db
            .collection("User")
            .doc(uid)
            .collection("Artist")
            .add(itemObj)
            .catch((err) => alert(err));
    };

    removeArtist = (itemObj) => {
        const uid = this.auth.currentUser.uid;
        //console.log(itemObj);
        this.db
            .collection("User")
            .doc(uid)
            .collection("Artist")
            .doc(itemObj.id)
            .delete()
            .then(function () {
                //console.log("Document successfully deleted!");
                //window.location.reload(false);
            })
            .catch(function (error) {
                console.error("Error removing document: ", error);
            });
    };

    collection = () => {
        const uid = this.auth.currentUser.uid;
        return this.db
            .collection("User")
            .doc(uid)
            .collection("Collection")
            .get();
    };

    addCollection = (itemObj) => {
        const uid = this.auth.currentUser.uid;
        this.db
            .collection("User")
            .doc(uid)
            .collection("Collection")
            .add(itemObj)
            .catch((err) => alert(err));
    };

    removeCollection = (itemObj) => {
        const uid = this.auth.currentUser.uid;
        //console.log(itemObj);
        this.db
            .collection("User")
            .doc(uid)
            .collection("Collection")
            .doc(itemObj.id)
            .delete()
            .then(function () {
                //console.log("Document successfully deleted!");
                //window.location.reload(false);
            })
            .catch(function (error) {
                console.error("Error removing document: ", error);
            });
    };

    setListenedCollection = (itemObj) => {
        const uid = this.auth.currentUser.uid;
        this.db
            .collection("User")
            .doc(uid)
            .collection("Collection")
            .doc(itemObj.id)
            .set(itemObj);

        return itemObj;
    };

    render() {
        return (
            <AppContext.Provider
                value={{
                    personData: this.state.personData,
                    auth: this.auth,
                    doCreateUserWithEmailAndPassword: this
                        .doCreateUserWithEmailAndPassword,
                    doSignInWithEmailAndPassword: this
                        .doSignInWithEmailAndPassword,
                    doSignOut: this.doSignOut,

                    addUsername: this.addUsername,
                    setUsername: this.setUsername,

                    musics: this.musics,
                    addMusic: this.addMusic,
                    removeMusic: this.removeMusic,
                    setListenedMusic: this.setListenedMusic,

                    albums: this.albums,
                    addAlbum: this.addAlbum,
                    removeAlbum: this.removeAlbum,
                    setListenedAlbum: this.setListenedAlbum,

                    artists: this.artists,
                    addArtist: this.addArtist,
                    removeArtist: this.removeArtist,

                    collection: this.collection,
                    addCollection: this.addCollection,
                    removeCollection: this.removeCollection,
                    setListenedCollection: this.setListenedCollection,
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
