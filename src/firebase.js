import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCxfrsFew6mYaal24F8nSjoncSp2kYNbPY",
  authDomain: "ibudget-b8154.firebaseapp.com",
  databaseURL: "https://ibudget-b8154.firebaseio.com",
  projectId: "ibudget-b8154",
  storageBucket: "ibudget-b8154.appspot.com",
  messagingSenderId: "557833337636",
  appId: "1:557833337636:web:066bb0d3ede1a84d8511b1",
  measurementId: "G-T3K9GMQSF3"
};
const firebases = firebase.initializeApp(firebaseConfig);

export default firebases;
