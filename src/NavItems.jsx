/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import icon from '../images/leaf.svg'
import { ImUser } from "react-icons/im";
import { HiShoppingCart } from "react-icons/hi2";



const NavItems = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='md:flex items-center justify-between p-8 bg-neutral-100 sticky top-0 z-50 md:text-2xl'>
            <div onClick={() => { setOpen(!open) }} className='md:hidden'>
                <span>
                    {
                        open === true ? <XMarkIcon className='h-10 w-10'></XMarkIcon> : <Bars3Icon className='h-10 w-10'></Bars3Icon>
                    }
                </span>
            </div>

            <div className='flex sm:justify-center items-center gap-3 bg-green-500 p-2 rounded-lg'>
                <img src={icon} alt=""  />
                <Link to='/home' className='font-bold'>CandLeaf</Link>
            </div>

            <div className={`flex lg:gap-10 md:gap-4 gap-2 lg:text-xl md:text-lg text-md  text-green-400 font-bold duration-700 md:opacity-100  ${open ? ' opacity-100' : ' opacity-0'}`}>
                <Link>Discovery</Link>
                <Link to='/about'>About</Link>
                <Link>Contact us</Link>
            </div>
            <div className='flex items-center gap-4'>
                <div className='lg:text-3xl md:text-2xl text-xl'><ImUser /></div>
                <div className='lg:text-4xl md:text-3xl text-2xl text-green-600 font-extrabold drop-shadow-xl hover:drop-shadow-2xl shadow-black '><HiShoppingCart/></div>
            </div>
        </nav>
    );
};

export default NavItems;