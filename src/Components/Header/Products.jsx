/* eslint-disable no-unused-vars */
import React from 'react';

// eslint-disable-next-line react/prop-types
const Products = ({ products }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, name, imgUrl, price,details } = products;
    console.log(_id);
    return (
        <div className="opacity-75 hover:opacity-100  shadow-xl p-3 m-4">
            <figure><img src={imgUrl} alt="Candle" /></figure>
            <div className="card-body">
                <h2 className="card-title font-semibold ">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className=' font-thin'>{details}</p>
                <div className="card-actions flex gap-2 justify-end font-semibold">
                    <div className="badge badge-outline">Price </div>
                    <div className="badge badge-outline">{price} $</div>
                </div>
            </div>
        </div>
    );
};

export default Products;