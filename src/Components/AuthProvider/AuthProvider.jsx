/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Children, useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../Firebase/FIrebase.config';

export const AuthContext=createContext(null);
const provider= new GoogleAuthProvider();

const auth=getAuth(app);

const AuthProvider = ({Children}) => {
    const [user, setUser]=useState(null);

    const googleSignIn=()=>{
        return signInWithPopup(auth,provider);
    };

    const authInfo={
        user,
        googleSignIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {Children}        
        </AuthContext.Provider>
    );
};

export default AuthProvider;