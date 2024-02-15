/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import img1 from '../../../images/bg.svg'
import img2 from '../../../images/bg3.svg'
import img3 from '../../../images/bg4.svg'
import star1 from '../../../images/Stars.svg'
import star2 from '../../../images/Stars2.svg'
import star3 from '../../../images/Stars3.svg'

const Container3 = () => {
    
    return (
        <div className=' bg-gray-100 p-28'>
            <div className='flex flex-col justify-center items-center  text-center'>
                <h2 className=' font-extrabold text-4xl p-4'>Testimonials</h2>
                <span>Some quotes from our happy customers</span>
            </div>
            <div className='flex flex-row justify-around gap-2'>
                <div className=' shadow-sm '>
                    <img src={img1} alt="" />
                    <img src={star1}></img>
                    <p>“I love it! No more air fresheners”</p>
                    <span className=''>Luisa</span>
                </div>
                <div className=' shadow-sm '>
                    <img src={img2} alt="" />
                    <img src={star2}></img>
                    <p>“Raccomended for everyone”</p>
                    <span>Sunny</span>
                </div>
                <div className=' shadow-sm '>
                    <img src={img3} alt="" />
                    <img src={star3}></img>
                    <p>“Looks very natural, the smell is awesome”</p>
                    <span>Suchi</span>
                </div>
            </div>
        </div>
    );
};

export default Container3;