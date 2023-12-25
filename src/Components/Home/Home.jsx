/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Header/Header';
import ProductContainer1 from '../Header/ProductContainer1';
import Container2 from '../Header/Container2';
import Container3 from '../Header/Container3';
import PopularProducts from '../Header/popularProducts';

const Home = () => {
    return (
        <div className=' '>
            <Header></Header>
            <ProductContainer1></ProductContainer1>
            <Container2></Container2>
            <Container3></Container3>
            <PopularProducts></PopularProducts>
        </div>
    );
};

export default Home;