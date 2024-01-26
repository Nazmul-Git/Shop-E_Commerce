/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import icon from '../images/leaf.svg'
import { ImUser } from "react-icons/im";
import { FiLogOut } from "react-icons/fi";
import { HiShoppingCart } from "react-icons/hi2";
import { AuthContext } from './Components/AuthProvider/AuthProvider';
import ActiveLink from './Components/ActiveLink/ActiveLink';




const NavItems = () => {
    const { user, googleSignIn, userLogOut } = useContext(AuthContext);

    // console.log(user)
    const [open, setOpen] = useState(false);
    const [selects, setSelects] = useState();


    const handleSignIn = () => {
        googleSignIn().then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            return toast('Successfully login..!');
        }).catch(error => console.log(error.message))
    }

    const handleLogout = () => {
        userLogOut().then(() => {
            return toast('Successfully logout..!');
        }).catch(error => console.error(error))
    }

    return (
        <nav className='md:flex items-center justify-between p-8 bg-white sticky top-0 z-50 md:text-lg '>
            <div onClick={() => { setOpen(!open) }} className='md:hidden'>
                <span>
                    {
                        open === true ? <XMarkIcon className='h-10 w-10 font-extrabold'></XMarkIcon> : <Bars3Icon className='h-10 w-10 font-extrabold'></Bars3Icon>
                    }
                </span>
            </div>


            <div className='flex sm:justify-center items-center  p-2 rounded-lg'>
                <img src={icon} alt="" className='bg-green-700 rounded-3xl p-1' />
                <Link to='/home' className='font-bold text-2xl text-green-600'>CandLeaf</Link>
            </div>

            <div className={`flex lg:gap-10 md:gap-8 gap-4 lg:text-lg md:text-md text-sm justify-end p-2 text-black font-bold duration-700 md:opacity-100  ${open ? ' opacity-100' : ' opacity-0'}`}>
                {/* <select value={selects} onChange={(e) => setSelects(e.target.value)} className=" text-left w-full justify-center  gap-x-1.5 rounded-md  ring-1 ring-inset">
                    <option><ActiveLink>Discovery</ActiveLink></option>
                    <option><ActiveLink>Order</ActiveLink></option>
                    <option><ActiveLink>Help Center</ActiveLink></option>
                </select> */}
                <ActiveLink to='/home'>Home</ActiveLink>
                <ActiveLink to='/orders'>Order</ActiveLink>
                <ActiveLink to='/about'>About</ActiveLink>
                <ActiveLink to='/contact'>Contact_us</ActiveLink>
            </div>
            <div className='flex items-center justify-end gap-6'>

                {
                    user ? <div onClick={handleLogout} className=' font-semibold text-red-600 flex flex-row items-center gap-1    '><span className='text-md'>Log out</span><FiLogOut></FiLogOut><ToastContainer className='text-lg mt-24'></ToastContainer></div>
                        : <div onClick={handleSignIn} className=' font-semibold text-blue-600 flex flex-row items-center gap-1'><span className='text-md'>Log in</span><ImUser></ImUser><ToastContainer className='text-lg mt-24'></ToastContainer></div>
                }


                <div className='lg:text-4xl md:text-3xl text-2xl text-green-600 font-extrabold drop-shadow-xl hover:drop-shadow-2xl shadow-black '><HiShoppingCart /></div>
            </div>
        </nav>
    );
};

export default NavItems;