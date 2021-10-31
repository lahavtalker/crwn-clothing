import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCeFQRBiTP-e7TPZUJZabgJix06c5KIwNQ",
  authDomain: "crwn-db-76589.firebaseapp.com",
  projectId: "crwn-db-76589",
  storageBucket: "crwn-db-76589.appspot.com",
  messagingSenderId: "1002097125791",
  appId: "1:1002097125791:web:70f7172ab03c05a94bf5aa",
  measurementId: "G-M1HKEE4QWV",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
