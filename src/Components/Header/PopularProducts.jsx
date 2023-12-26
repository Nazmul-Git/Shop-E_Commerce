/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Popular from './Popular';
import Marquee from 'react-fast-marquee';

const PopularProducts = () => {
    const [popular, setPopular] = useState([]);
    // console.log(popular);


    useEffect(() => {
        fetch('http://localhost:5000/home')
            .then(res => res.json())
            .then(data => {
                setPopular(data)
            })
    }, []);

    return (
        <div className='mt-32'>
            <div className='text-center'>
                <h2 className='font-extrabold text-4xl'>Popular</h2>
                <span>Our top selling product that you may like</span>
            </div>

            <Marquee speed={100} pauseOnHover={true}  className='p-8'>
                {
                    popular.map(m => <Popular key={m._id} popular={m}></Popular>)
                }
            </Marquee>
        </div>
    );
};

export default PopularProducts;