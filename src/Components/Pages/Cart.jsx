/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {
    const product=useLoaderData();
    console.log(product);
    return (
        <div>
            <p>Cart</p>
        </div>
    );
};

export default Cart;