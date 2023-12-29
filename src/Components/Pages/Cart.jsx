/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import leaf from '../../../images/leaf.svg'

const Cart = () => {
    const [count, setCount] = useState(0);
    const product = useLoaderData();
    const { _id, imgUrl, price, name, details, mostSell } = product;
    return (
        <>
            <div className=' md:grid grid-cols-2 p-8 md:gap-10'>
                <div className=' bg-gray-100 p-4'>
                    <img src={imgUrl} alt="" className='' />
                    <p className='lg:text-lg'>All hand-made with natural soy wax, Candleaf is made for your pleasure moments.
                        🚚 FREE SHIPPING</p>
                </div>
                <div className='flex-row  p-4'>
                    <p className='md:text-2xl text-green-500 font-extrabold'>{name}</p>
                    <div className='flex md:justify-between lg:gap-40 md:gap-8 gap-4 '>
                        <div>
                            <p className='text-xl'>$ {price}</p>

                            <div className=' flex-row items-center mt-10 gap-4'>
                                <p className='md:text-2xl text-green-500 font-extrabold'>Quantity</p>
                                <div className='flex gap-4 text-lg font-bold'>
                                    <button className='text-red-600'>-</button>
                                    {
                                        count
                                    }
                                    <button className='text-blue-600'>+</button>
                                </div>
                            </div>
                        </div>


                        <div className=' grid grid-cols-1 lg:gap-20 md:gap-4 '>
                            <img src={leaf} alt="" className=' bg-green-500 rounded-full p-4 md:h-40 md:w-40' />
                            <p className='lg:text-lg text-justify '>{details}</p>
                            <Link to='' className=' bg-green-300 hover:bg-green-400 lg:text-lg font-bold rounded-md text-center lg:p-2 md:p-2'>+Add to Cart</Link>
                        </div>


                    </div>

                </div>

            </div>
            <div>
                <p className='p-10 lg:text-lg text-justify'>Wax: Top grade Soy wax that delivers a smoke less,  consistent burn ||
                    Fragrance: Premium quality ingredients with natural essential oils ||
                    Burning Time: 70-75 hours ||
                    Dimension: 10cm x 5cm ||
                    Weight: 400g </p>
            </div>
        </>
    );
};

export default Cart;