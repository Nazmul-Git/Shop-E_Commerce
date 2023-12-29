/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Products from '../Header/Products';

const AllProducts = () => {
    const allProduct = useLoaderData();
    console.log(allProduct)
    return (
        <div>
            <p className='font-bold text-4xl flex justify-center items-center p-10'>All products</p>
            <div className=' md:grid md:grid-cols-3 md:p-10  gap-4 lg:p-10 lg:grid-cols-4'>
                {
                    allProduct.map(p => <Products key={p._id} products={p}></Products>)
                }
            </div>
        </div>
    );
};

export default AllProducts;