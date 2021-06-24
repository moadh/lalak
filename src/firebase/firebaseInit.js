import firebase from "firebase/app";
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyBEY3ZLsRNSnTXICmTie1gx6wT8KeRPJwU",
    authDomain: "lalak-e5781.firebaseapp.com",
    projectId: "lalak-e5781",
    storageBucket: "lalak-e5781.appspot.com",
    messagingSenderId: "794043160644",
    appId: "1:794043160644:web:739fcd7607c9b4253d4411"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {timestamp};
export default firebaseApp.firestore();