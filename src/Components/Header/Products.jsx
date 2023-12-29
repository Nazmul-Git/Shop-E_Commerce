/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Products = ({ products, handleProductRoute }) => {
    
    // eslint-disable-next-line react/prop-types
    const { _id, name, imgUrl, price,details} = products;
    const short=`${details.length>50}`&& details.slice(-50)+'...';
    // console.log(short)
    return (
        <div  className=" relative opacity-75 hover:opacity-100 hover:bg-gray-300 duration-700 shadow-xl p-3 m-4">
            <figure><img src={imgUrl} alt="Candle" /></figure>
            <div className="card-body">
                <h2 className="card-title font-semibold text-green-600">
                    {name}
                </h2>
                <p className=' font-thin mb-8'>{short}</p>
                <div className=" absolute bottom-4 right-4 flex items-center gap-2 font-semibold ">
                    <div onClick={()=>handleProductRoute}><Link to={`/products/${_id}`} className=' font-extrabold  pl-2 pr-2 rounded-md bg-green-400'> Add to Cart </Link></div>
                    <div className='text-blue-600 font-bold'>{price} <span className='text-red-600'>$</span></div>
                </div>
            </div>
        </div>
    );
};

export default Products;