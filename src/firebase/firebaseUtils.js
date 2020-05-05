import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBQm77k8Zvgj-HFwOAsqfAwJDVipCNkBN8",
  authDomain: "store-porfolio.firebaseapp.com",
  databaseURL: "https://store-porfolio.firebaseio.com",
  projectId: "store-porfolio",
  storageBucket: "store-porfolio.appspot.com",
  messagingSenderId: "334220347539",
  appId: "1:334220347539:web:bd384b405acc62fb9b6566",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
