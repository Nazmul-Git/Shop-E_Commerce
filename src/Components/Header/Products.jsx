/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

// eslint-disable-next-line react/prop-types
const Products = ({ products }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, name, imgUrl, price,details } = products;
    const short=`${details.length>50}`&& details.slice(-50)+'...';
    console.log(short)
    return (
        <div className="  opacity-75 hover:opacity-100 hover:bg-green-300 duration-700 shadow-xl p-3 m-4">
            <figure><img src={imgUrl} alt="Candle" /></figure>
            <div className="card-body">
                <h2 className="card-title font-semibold ">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className=' font-thin'>{short}</p>
                <div className=" flex justify-end gap-2 font-semibold p-2 bottom-0">
                    <div>Price </div>
                    <div>{price} $</div>
                </div>
            </div>
        </div>
    );
};

export default Products;