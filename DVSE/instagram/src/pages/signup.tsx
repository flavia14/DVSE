import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import {FirebaseContext, FireStoreContext} from '../context/firebase';
import { doesUsernameExist } from '../services/firebase';
export default function SignUp() {
    const history = useHistory();
    const firebaseInit: firebase.app.App | undefined= useContext(FirebaseContext);
    const [username, setUserName]=useState("");
    const [fullname, setFullName]=useState("");
    const [emailAddress, setEmailAddress]=useState("");
    const [password, setPassword]=useState("");
    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === ''||fullname==='' || username==='';
    //utilizam useEffect pentru ca titlul nu este acelasi pe toate paginile
    useEffect(() => {
    document.title = 'SignUp - Instagram';
    }, []);

    const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //verificaram daca username exista cu ajutorul functiei realizate in services
        const usernameExist: Promise<boolean[]> =doesUsernameExist(username);
        if (!(await usernameExist).length) 
        {
        try {
            const createdUserResult: firebase.auth.UserCredential | undefined = await firebaseInit?.auth().createUserWithEmailAndPassword(emailAddress, password);
            console.log(firebaseInit)  
            history.push(ROUTES.LOGIN);
            await createdUserResult?.user?.updateProfile({
                displayName: username
            });
            
            await firebaseInit?.firestore().collection('users').add({
                userId: createdUserResult?.user?.uid,
                username: username.toLowerCase(),
                fullname,
                emailAddress: emailAddress.toLowerCase(),
                following: [],
                followers: [],
                dateCreated: Date.now()
            })
        } catch (error) {
            setEmailAddress('');
            setPassword('');
            setFullName("");
            setUserName("");
           if(error instanceof Error){
                setError(error.message);
            }
        }
    }
    
     else  {
        setUserName('');
        setFullName('');
        setEmailAddress('');
        setPassword('');
        setError('That username  '+username+' is already taken, please try another!')
    }       
}
    return (
        <div className="container flex mx-auto max-w-xs items-center h-screen">
            <div className="flex flex-col">
                <div className="flex flex-col items-center bg-white p-4 border mb-4">
                    <h1 className="flex justify-center w-full">
                        <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
                    </h1>
                    {error && <p className="mb-4 text-xs text-red-500 text-center">{error}</p>}
                    
                    <form onSubmit={handleSignup} method="POST">
                        <input
                            aria-label="Enter your username"
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={({ target }) => setUserName(target.value)}
                        />
                        <input
                            aria-label="Enter your full name"
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
                            type="text"
                            placeholder="Full name"
                            value={fullname}
                            onChange={({ target }) => setFullName(target.value)}
                        />
                        <input
                            aria-label="Enter your email address"
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
                            type="text"
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <input
                            aria-label="Enter your password"
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <button
                           disabled={isInvalid}
                            type="submit"
                            className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${ isInvalid && 'cursor-not-allowed opacity-50'
                        }`}
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
                    <p className="text-sm">
                        Have an account?{` `}
                        <Link to={ROUTES.LOGIN} className="font-bold text-blue">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}