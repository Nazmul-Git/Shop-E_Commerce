/* eslint-disable no-unused-vars */
import React from 'react';
import h_img from '../../../images/bg-image.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='md:flex flex-row items-center justify-center'>
            <img src={h_img} alt="" className='w-full relative'/>
            <div className='shadow-lg shadow-black-500 p-16 sm:p-2 absolute bg-slate-100'>
                <div className=' text-center '>
                    <h3 className=' font-bold'>The natural candle</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque aperiam repudiandae, nesciunt minus fugiat vel excepturi expedita? Ea, animi!</p>
                </div>
                <div className='flex items-center justify-center'>
                    <Link className='bg-green-400  rounded-md  p-2 m-2'>Discover our collection</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;