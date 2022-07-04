import firebase from "firebase";
//import { seedDatabase } from '../seed';
const config = {
  apiKey: "AIzaSyA50WSogXJa3mmY42BCcMxvThMF85wveOQ",
  authDomain: "instagram-b6394.firebaseapp.com",
  projectId: "instagram-b6394",
  storageBucket: "instagram-b6394.appspot.com",
  messagingSenderId: "311630374340",
  appId: "1:311630374340:web:f531548fe0f1427ce43091"
  };
  
  const firebaseInit = firebase.initializeApp(config);
  const FieldValue  = firebaseInit.firestore();
  //seedDatabase(firebaseInit);
  export { firebaseInit, FieldValue };