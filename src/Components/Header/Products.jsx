/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Products = ({ products, handleProductRoute }) => {

    // eslint-disable-next-line react/prop-types
    const { _id, name, imgUrl, price, details } = products;
    const short = `${details.length > 50}` && details.slice(-50) + '...';
    // console.log(short)
    return (
        <div className=" grid grid-cols-1 p-4 m-4 gap-2 shadow-inner shadow-black-700 rounded-md hover:bg-slate-300">
            <img src={imgUrl} alt="Candle" className='lg:h-72 md:h-48 w-full' /> 
            <div className=" grid grid-cols-1 gap-4">
                <div>
                    <h2 className=" font-extrabold">{name}</h2>
                    <p className=''>{short}</p>
                </div>
                <div className=" flex flex-row justify-between">
                    <div onClick={() => handleProductRoute}>
                        <Link to={`/products/${_id}`} className='font-bold p-2 rounded-md bg-green-500 hover:font-extrabold'>Details </Link>
                    </div>
                    <div className=' font-bold'>{price} <span className='text-red-600'>$</span></div>
                </div>
            </div>
        </div>
    );
};

export default Products;