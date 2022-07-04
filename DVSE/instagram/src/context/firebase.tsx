import { app, firestore } from 'firebase';
import React, { createContext } from 'react';

const FirebaseContext = createContext<app.App | undefined>(undefined);
const FireStoreContext = createContext<firebase.firestore.Firestore | undefined>(undefined);
export  {FirebaseContext, FireStoreContext};
