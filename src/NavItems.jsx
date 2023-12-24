/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const NavItems = () => {
    return (
        <div className='flex items-center justify-between p-8 bg-'>
            <div className='flex items-center gap-4'>
                <div>icon</div>
                <Link>CandLeaf</Link>
            </div>
            <div className='flex items-center gap-4'>
                <Link>Discovery</Link>
                <Link to='/about'>About</Link>
                <Link>Contact us</Link>
            </div>
            <div className='flex items-center gap-4'>
                <div>Login icon</div>
                <div>Cart Icon</div>
            </div>
        </div>
    );
};

export default NavItems;