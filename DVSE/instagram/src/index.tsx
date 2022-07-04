import React from 'react';
import ReactDOM from 'react-dom';
import { firebaseInit, FieldValue } from './lib/firebase';
import {FirebaseContext, FireStoreContext} from './context/firebase';
import App from "./App";


ReactDOM.render(
  <FirebaseContext.Provider value ={firebaseInit} >
   <FireStoreContext.Provider value={FieldValue}><App/> 
   </FireStoreContext.Provider> 
</FirebaseContext.Provider>,
  document.getElementById('root')
);