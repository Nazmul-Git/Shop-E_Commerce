/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import Popular from './Popular';

const PopularProducts = () => {
    const [popular, setPopular] = useState([]);
    // const [mostPopular, setMostPopular] = useState([]);
    console.log(popular);

    // const popularFnc=async(url)=>{
    //     const res=await fetch(url);
    //     const data=await res.json();
    //     console.log(data);
    //     setPopular(data);
    //     return data;
    // }
   

 


    // useEffect(() => {
    //     fetch('/src/Product1.json')
    //         .then(res => res.json())
    //         .then(data =>{
    //             setPopular(data)
    //         })
    // }, []);

    // if(!popular.length===0){
    //     const most= popular.filter(p=>p.mostSell>200);
    //     setMostPopular(most);
    //     console.log('most',most)
    // }

    

    return (
        <div>
            <div className='text-center'>
                <h2 className='font-extrabold text-4xl'>Popular</h2>
                <span>Our top selling product that you may like</span>
            </div>
            
                {
                    popular.map(m => {
                        <Popular key={m._id} popular={popular}></Popular>
                    })
                }
            
        </div>
    );
};

export default PopularProducts;