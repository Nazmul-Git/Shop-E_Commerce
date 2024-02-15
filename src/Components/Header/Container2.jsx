/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import candleImg from '../../../images/candle2.jpg'

const Container2 = () => {
    return (
        <div className='md:grid grid-cols-2 m-4 mt-20 md:p-10  mt-133px relative'>
            <div className='relative'>
                <div className=' text-start mb-4'>
                    <h2 className='font extrabold text-4xl'>Clean and fragrant soy wax</h2>
                    <span className='text-green-400 text-lg'>Made for your home and for your wellness</span>
                    <ul className=' md:m-10 sm:m-4  md:text-xl md:flex flex-col md:gap-6 sm:gap-3'>
                        <li>Eco-sustainable:All recyclable materials, 0% CO2 emissions.</li>
                        <li>Hyphoallergenic: 100% natural, human friendly ingredients. </li>
                        <li>Handmade: All candles are craftly made with love.</li>
                        <li>Long burning: No more waste. Created for last long.</li>
                    </ul>
                </div>
                <Link to='/about' className=' bg-green-300 font-semibold hover:bg-green-700 hover:text-white md:p-2 rounded-md md:absolute bottom-0 right-12'>Learn more</Link>
            </div>
            <div className=''>
                <img src={candleImg} alt="candle" className='h-full shadow-white shadow-inner'/> 
            </div>
        </div>
    );
};

export default Container2;