/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import ProductContainer1 from '../Header/ProductContainer1';
import Container2 from '../Header/Container2';
import Container3 from '../Header/Container3';
import PopularProducts from '../Header/popularProducts';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data=useLoaderData();
    console.log(data);
    

    return (
        <div className=' '>
            <Header></Header>
            <ProductContainer1 data={data}></ProductContainer1>
            <Container2></Container2>
            <Container3></Container3>
            <PopularProducts></PopularProducts>
        </div>
    );
};

export default Home;