/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user}=useContext(AuthContext);
    const location=useLocation();
    // console.log(location);
    
    if(user) return children;
    return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default PrivateRoute;