import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDv893Pw9elPtxqHJbYH2oOurmzRzs2YRo",
    authDomain: "datax-a9184.firebaseapp.com",
    projectId: "datax-a9184",
    storageBucket: "datax-a9184.appspot.com",
    messagingSenderId: "869694565920",
    appId: "1:869694565920:web:7b659bac10910e438a5645"
  };

firebase.initializeApp(firebaseConfig);

const dbh = firebase.firestore();

export { dbh }

// export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
