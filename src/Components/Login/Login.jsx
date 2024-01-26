/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// LoginPage.jsx
import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../AuthProvider/AuthProvider';
// import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
    const { googleSignIn, userLogIn } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/home';
    // console.log(location);
    console.log(from);

    const handleLogIn = () => {
        console.log(email,password)
        userLogIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                if(loggedUser) navigate(from);

            })
            .catch(error => {
                console.error(error.message);
            })

    }

    const handleSignIn = () => {
        googleSignIn().then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            //navigate do not work
            if(loggedUser) navigate(from)
        }).catch(error => console.log(error.message))
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">Login Page</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>
                    <div>
                        <div className='grid grid-cols-2 gap-1'>
                            <div>
                                <span>New in this site ?</span>
                                <Link to='/register' className='text-blue-500 underline font-semibold'>Register</Link>
                            </div>
                            <button type='button' onClick={handleSignIn}>
                                <div className='flex gap-1'>
                                    <span className='text-center text-blue-500 font-semibold'>Sign in with </span>
                                    <FcGoogle className='w-8 h-8' />
                                    {/* <ToastContainer className=' text-lg mt-10'></ToastContainer> */}
                                </div>
                            </button>

                        </div>
                        <button
                            type="button"
                            onClick={handleLogIn}
                            className="bg-blue-500 text-white p-2 rounded-md w-full mt-2"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
