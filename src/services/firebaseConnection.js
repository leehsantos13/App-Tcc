import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


let firebaseConfig = {
    apiKey: "AIzaSyAUo-0Kug2Px_Bkzq5_tm-8ObSapWzLnec",
    authDomain: "app-tcc-699c1.firebaseapp.com",
    projectId: "app-tcc-699c1",
    storageBucket: "app-tcc-699c1.appspot.com",
    messagingSenderId: "866559275869",
    appId: "1:866559275869:web:bf9b1b900860fa68ed6eb4",
    measurementId: "G-N1KWYY6JWH"
  };
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
    
  }

  

  export default firebase;