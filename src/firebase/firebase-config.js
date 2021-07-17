import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCbHzahQDjbO-HAqtG1i9Ew8yXnAwDWAow",
    authDomain: "react-app-journal-ac184.firebaseapp.com",
    projectId: "react-app-journal-ac184",
    storageBucket: "react-app-journal-ac184.appspot.com",
    messagingSenderId: "642276327705",
    appId: "1:642276327705:web:76edbc245bff2eb273c588"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}