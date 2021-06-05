import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCuLzQ48pnwtySQwyR1BY0-UrTKdWHm0Uw",
    authDomain: "covid-19-tracker-ceffd.firebaseapp.com",
    projectId: "covid-19-tracker-ceffd",
    storageBucket: "covid-19-tracker-ceffd.appspot.com",
    messagingSenderId: "272170657225",
    appId: "1:272170657225:web:be552eeff334fd36acf418",
    measurementId: "G-3BY3SXBXQ7"
  };

  const firebasepp = firebase.initializeApp(firebaseConfig);

  const db=firebasepp.firestore();
  const auth=firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export default db;
  export{auth,provider};