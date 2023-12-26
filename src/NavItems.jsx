/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

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

            <div className='flex items-center gap-4'>
                <div>icon</div>
                <Link to='/home'>CandLeaf</Link>
            </div>

            <div className={`flex items-center gap-4 text-green-400 font-bold duration-700 md:opacity-100  ${open ? ' opacity-100' : ' opacity-0'}`}>
                <Link>Discovery</Link>
                <Link to='/about'>About</Link>
                <Link>Contact us</Link>
            </div>
            <div className='flex items-center gap-4'>
                <div>Login icon</div>
                <div>Cart Icon</div>
            </div>
        </nav>
    );
};

export default NavItems;