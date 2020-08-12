import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBiyezITrufjQjjoX0GNIi8nVF1pXgFje8",
    authDomain: "tinder-klone.firebaseapp.com",
    databaseURL: "https://tinder-klone.firebaseio.com",
    projectId: "tinder-klone",
    storageBucket: "tinder-klone.appspot.com",
    messagingSenderId: "752732520419",
    appId: "1:752732520419:web:c731d658207f288df6aad6",
    measurementId: "G-JCCMC2P7LT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  //Export the variable for later use
  export default database;