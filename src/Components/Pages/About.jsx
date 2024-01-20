/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../images/store1.jpg'
import img2 from '../../../images/store3.jpg'

const About = () => {
    return (
        <div className="flex flex-col justify-center text-center text-pretty m-20">
            <div>
                <h1 className='text-2xl font-extrabold p-4 text-orange-500'>Welcome to Our E-Commerce Store!</h1>
                <p className='font-bold text-lg'>Your go-to destination for quality products and seamless shopping experiences.</p>
                <div className=' grid grid-cols-2 md:gap-24 mt-8 p-20 '>
                    <div><img src={img1} alt="" className=' md:h-96' /></div>
                    <div className='mt-48'><img src={img2} alt="" className=' md:h-96' /></div>
                </div>
            </div>

            <div className=' flex flex-col gap-8'>
                <h2 className='text-2xl font-extrabold p-4 text-orange-500'>Our Story</h2>
                <p className='font-bold text-md text-ellipsis'>
                    Founded in [Year], our e-commerce store is dedicated to providing customers with a diverse range of
                    high-quality products. Whether you are looking for the latest fashion trends, cutting-edge electronics,
                    or home essentials, we have got you covered.
                </p>
            </div>

            <div className=' flex flex-col gap-8'>
                <h2 className='text-2xl font-extrabold p-4 text-orange-500'>Our Mission</h2>
                <p className='font-bold text-md text-justify'>
                    At [Your Company Name], our mission is to make online shopping enjoyable, convenient, and reliable for
                    our customers. We strive to offer a curated selection of products that meet the highest standards of
                    quality and value.
                </p>
            </div>

            <div className=' flex flex-col gap-8'>
                <h2 className='text-2xl font-extrabold p-4 text-orange-500'>Why Choose Us?</h2>
                <div className='font-bold text-md text-justify grid grid-cols-2 gap-4'>
                    <ul>
                        <li>-- Extensive Product Range: Explore a wide variety of products, carefully selected to meet your needs.</li>
                        <li>-- Quality Assurance: We prioritize quality, ensuring that every product meets our rigorous standards.</li>
                        <li>-- User-Friendly Experience: Our website is designed with you in mind, making your shopping journey
                            seamless and enjoyable.</li>
                        <li>-- Secure Transactions: Shop with confidence knowing that your personal information is secure.</li>
                    </ul>
                    <img src="" alt="" />
                </div>
            </div>

            <div className=' flex flex-col gap-8'>
                <h2 className='text-2xl font-extrabold p-4 text-orange-500'>Contact Us</h2>
                <p className='font-bold text-md'>
                    Have questions or feedback? We would love to hear from you! Reach out to our customer support team at
                    support@<span className=' text-red-800'>[nazmulhasan16021998@gmail.com]</span> or use our <Link to="/contact" className='text-blue-500 font-semibold underline'>contacts</Link>
                </p>
            </div>
        </div>
    );
};

export default About;