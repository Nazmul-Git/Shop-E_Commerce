/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Children, useEffect, useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/FIrebase.config';

const auth=getAuth(app);
export const AuthContext=createContext(null);
const provider= new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);

    const googleSignIn=()=>{
        return signInWithPopup(auth,provider);
    };

    const userLogOut=()=>{
        return signOut(auth);
    }


    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    

    const authInfo={
        user,
        googleSignIn,
        userLogOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}        
        </AuthContext.Provider>
    );
};

export default AuthProvider;