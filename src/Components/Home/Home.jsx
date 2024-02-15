/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import Header from '../Header/Header';
import ProductContainer1 from '../Header/ProductContainer1';
import Container2 from '../Header/Container2';
import Container3 from '../Header/Container3';
import PopularProducts from '../Header/popularProducts';
import { useLoaderData } from 'react-router-dom';



const Home = () => {
    const data=useLoaderData();
    // console.log(data);
    const scrollRef = useRef(null);
    const handleClick = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className='relative'>
            <Header handleClick={handleClick}></Header>
            <ProductContainer1 data={data} scrollRef={scrollRef}></ProductContainer1>
            <Container2></Container2>
            <Container3></Container3>
            <PopularProducts></PopularProducts>
            
        </div>
    );
};

export default Home;