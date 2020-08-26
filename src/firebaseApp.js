import firebase from 'firebase'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD9Uty9vp4t_cRaZsMyIta2ADmD_m4LM9Y",
    authDomain: "expance-tracker.firebaseapp.com",
    databaseURL: "https://expance-tracker.firebaseio.com",
    projectId: "expance-tracker",
    storageBucket: "expance-tracker.appspot.com",
    messagingSenderId: "804050321023",
    appId: "1:804050321023:web:25ed3bc6222a4406a8c94a",
    measurementId: "G-W874QRTCRR"
  };
  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig);
//  export const eventRef = firebaseApp.database().ref().child('event');
  //export const provider = new firebase.auth.GoogleAuthProvider();

export const firebasedatabase = firebase.database();


  firebase.analytics();
