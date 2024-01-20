/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useRef } from 'react';
import h_img from '../../../images/candle2.jpg'


const Header = ({handleClick}) => {

    return (
        <div className='md:flex flex-row items-center justify-center'>
            <img src={h_img} alt="" className='w-full md:relative' />
            <div className=' shadow-lg shadow-black-500 md:p-10 md:ml-48 md:mr-48  sm:p-2 md:absolute backdrop-blur-sm'>
                <div className=' text-center md:text-white'>
                    <h3 className=' font-bold'>The natural candle</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque aperiam repudiandae, nesciunt minus fugiat vel excepturi expedita? Ea, animi!</p>
                </div>
                <div className='flex items-center justify-center'>
                    <button onClick={handleClick} className='bg-green-400  rounded-md  p-2 m-2'>Discover our collection</button>
                </div>
            </div>
        </div>
    );
};

export default Header;