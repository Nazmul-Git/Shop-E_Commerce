/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Popular = ({ popular }) => {
    console.log(popular)
    const { _id, name, imgUrl, price, details } = popular;
    // const short = `${details.length > 50}` && details.slice(-50) + '...';
    console.log(name,imgUrl,price)
    return (
        <div className="relative opacity-75 hover:opacity-100 hover:bg-green-300 duration-700 shadow-xl p-8 ">
            <div className=' h-40 w-40'><img src={imgUrl} alt="Candle" className='' /></div>
            <div className="card-body">
                <h2 className="card-title font-semibold ">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                {/* <p className=' font-thin mb-4'>{short}</p> */}
                <div className=" absolute bottom-4 right-4 flex items-center gap-2 font-semibold ">
                    <div>Price </div>
                    <div>{price} $</div>
                </div>
            </div>
        </div>
    );
};

export default Popular;