/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import icon from '../images/leaf.svg'
import { ImUser } from "react-icons/im";
import { FiLogOut } from "react-icons/fi";
import { HiShoppingCart } from "react-icons/hi2";
import { AuthContext } from './Components/AuthProvider/AuthProvider';
import Dropdown from 'react-dropdown';



const NavItems = () => {
    const { user, googleSignIn, userLogOut } = useContext(AuthContext);

    // console.log(user)
    const [open, setOpen] = useState(false);

    const handleSignIn = () => {
        googleSignIn().then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
        }).catch(error => console.log(error.message))
    }

    const handleLogout = () => {
        userLogOut().then(() =>{}).catch(error => console.error(error))
    }

    return (
        <nav className='md:flex items-center justify-between p-8 bg-neutral-100 sticky top-0 z-50 md:text-2xl'>
            <div onClick={() => { setOpen(!open) }} className='md:hidden'>
                <span>
                    {
                        open === true ? <XMarkIcon className='h-10 w-10 font-extrabold'></XMarkIcon> : <Bars3Icon className='h-10 w-10 font-extrabold'></Bars3Icon>
                    }
                </span>
            </div>


            <div className='flex sm:justify-center items-center gap-3 bg-green-500 p-2 rounded-lg'>
                <img src={icon} alt="" />
                <Link to='/home' className='font-bold'>CandLeaf</Link>
            </div>

            <div className={`flex lg:gap-10 md:gap-4 gap-2 lg:text-xl md:text-lg text-md justify-end p-2 text-green-400 font-bold duration-700 md:opacity-100  ${open ? ' opacity-100' : ' opacity-0'}`}>
                <Link>Discovery</Link>
                <Link to='/about'>About</Link>
                <Link>Contact_us</Link>
            </div>
            <div className='flex items-center justify-end gap-6'>

                {
                    user ? <div onClick={handleLogout} className='lg:text-3xl md:text-2xl text-xl text-red-600'><FiLogOut></FiLogOut></div>
                        : <div onClick={handleSignIn} className='lg:text-3xl md:text-2xl text-xl text-purple-600'><ImUser></ImUser></div>
                }


                <div className='lg:text-4xl md:text-3xl text-2xl text-green-600 font-extrabold drop-shadow-xl hover:drop-shadow-2xl shadow-black '><HiShoppingCart /></div>
            </div>
        </nav>
    );
};

export default NavItems;