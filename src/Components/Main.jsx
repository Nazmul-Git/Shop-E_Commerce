/* eslint-disable no-unused-vars */
import React from 'react';
import NavItems from '../NavItems';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavItems></NavItems>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;