/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {
    const product=useLoaderData();
    console.log(product);
    const {_id,name,price, imgUrl,details,mostSell}=product
    return (
        <div className=' grid grid-cols-2 p-8 m-8 gap-10'>
            <div className=' bg-gray-100 p-4'>
                <img src={imgUrl} alt="" className=''/>
                <p>All hand-made with natural soy wax, Candleaf is made for your pleasure moments.  
                   🚚 FREE SHIPPING</p>
            </div>
            <div className=' shadow-md shadow-blue-500 p-4'>
                <p>{name}</p>
                <p>$ {price}</p>
                <p>Quantity</p>
            </div>
        </div>
    );
};

export default Cart;