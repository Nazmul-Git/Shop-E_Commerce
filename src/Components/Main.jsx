/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import NavItems from '../NavItems';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import { FcExternal } from "react-icons/fc";

const Main = () => {
    // const scrollRef = useRef(null);
    // const handleClick = () => {
    //     if (scrollRef.current) {
    //         scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    //     }
    // }
    return (
        <div className='relative'>
            <NavItems></NavItems>
            <Outlet></Outlet>
            <Footer></Footer>
            <FcExternal  className='h-16 w-16 fixed bottom-5 right-2 z-50 cursor-pointer'></FcExternal>       
        </div>
    );
};

export default Main;