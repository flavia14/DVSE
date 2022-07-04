import { useState, useEffect, useContext } from 'react';
import {FirebaseContext} from '../context/firebase';
import { firebaseInit } from '../lib/firebase';

export default function useAuthListener(): firebase.User | undefined {
    const [user, setUser] = useState<firebase.User | undefined>(JSON.parse(localStorage.getItem('authUser')??"{}"));
    const  firebase  = useContext(FirebaseContext);
    
    useEffect(() => {
        const listener = firebaseInit.auth().onAuthStateChanged((authUser) => {
            if (authUser) {
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUser(authUser);


                firebaseInit.firestore().collection('users').get().then((collectionElement:any) => {
                    
                    collectionElement.docs.forEach((doc:any) => {
                        const omething = doc.data()
                        console.log(omething)
        
                        if(omething.emailAddress == authUser.email) {
                        setUser(omething)
                        }
                    })
                })
              
            
            } else {
                localStorage.removeItem('authUser');
                setUser(undefined);
            }
        });
        
        return () => listener();
    }, [firebase]);
    
    return user;
}