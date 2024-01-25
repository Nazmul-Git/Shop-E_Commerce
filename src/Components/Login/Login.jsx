/* eslint-disable no-unused-vars */
// LoginPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(email, password)
    const handleLogin = async () => {
        // Simulate authentication (replace with actual authentication logic)
        if (email === 'email' && password === 'password') {
            alert('Login successful!');
        } else {
            alert('Login failed. Please check your credentials.');
        }
    };

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
                            <button>
                                <div className='flex gap-1'>
                                    <span className='text-center text-blue-500 font-semibold'>Sign in with </span>
                                    <FcGoogle className='w-8 h-8' />
                                </div>
                            </button>

                        </div>
                        <button
                            type="button"
                            onClick={handleLogin}
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
