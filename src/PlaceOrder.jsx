/* eslint-disable no-unused-vars */
import { Input } from 'postcss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PlaceOrder = () => {
    const [isUser, setUser] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const number = form.number.value;
        const province = form.province.value;
        const city = form.city.value;
        const area = form.area.value;
        const address = form.address.value;
        // console.log(name,number, province,city,area,address)
        if (form) setUser(true);
        form.reset();
    }

    return (
        <div className=' md:grid grid-cols-2 lg:p-20 md:p-6 p-4 gap-4'>
            <div className='p-2'>
                <div className=' text-black'>
                    <div className="">
                        <div className="hero-content flex-col backdrop-blur-sm">
                            <div className="text-center ">
                                <h1 className="text-xl font-bold font-serif text-green-600">User Info</h1>
                            </div>
                            <div className="mt-10">
                                <form onSubmit={handleSubmit} className=" flex flex-col gap-4">

                                    <div className=" grid grid-cols-2 gap-2">
                                        <label className="label">
                                            <span className="label-text text-black font-bold">Full Name</span>
                                        </label>
                                        <input type="text" name='name' required placeholder="Full name" className="input input-bordered" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-2">
                                        <label className="label">
                                            <span className="label-text text-black font-bold">Number</span>
                                        </label>
                                        <input type="number" name='number' required placeholder="Number" className="input input-bordered" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-2">
                                        <label className="label">
                                            <span className="label-text text-black font-bold">Province</span>
                                        </label>
                                        <input type="text" name='province' required placeholder="Province" className="input input-bordered" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <label className="label">
                                            <span className="label-text text-black font-bold">City</span>
                                        </label>
                                        <input type="text" name='city' required placeholder="City" className="input input-bordered" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <label className="label">
                                            <span className="label-text text-black font-bold">Area</span>
                                        </label>
                                        <input type="text" name='area' required placeholder="Area" className="input input-bordered" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <label className="label">
                                            <span className="label-text text-black font-bold">Address</span>
                                        </label>
                                        <input type="text" name='address' required placeholder="Address" className="input input-bordered" />
                                    </div>

                                    <div className="">
                                        <button type='submit' value='submit' className=" text-lg font-bold bg-orange-300 p-2 w-full rounded-md hover:bg-orange-500 md:mt-20 "> Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </ div>
            </div>

            <div className={`${isUser ? 'opacity-100' : 'opacity-0'} shadow-md
                shadow-orange-600 rounded-md duration-700 m-2 p-2`}>
                <div className='md:mt-10'>
                    <p className=' text-md font-bold'>Discount & Payment</p>
                    <div className='grid grid-cols-2 mt-2'>
                        <div className=' flex flex-col gap-2'>
                            <p>Voucher</p>
                            <p>Promo Code</p>
                        </div>
                        <div className=' flex flex-col gap-2'>
                            <p className=' underline text-sm'>Voucher is not Available</p>
                            <input type='text' className=' bg-slate-100 rounded-md'></input>
                        </div>
                    </div>
                </div>
                <div className=' mt-4'>
                    <p className=' text-md font-bold'>Order Summery</p>
                    <div className='grid grid-cols-2 mt-2'>
                        <div className=' flex flex-col gap-2'>
                            <p>Items Total</p>
                            <p>Delivery Fee</p>
                            <p>Delivery Discount</p>
                            <p>Total Payment</p>
                        </div>
                        <div className=' flex flex-col gap-2 text-red-600 font-semibold'>
                            <p>100</p>
                            <p>55</p>
                            <p>55</p>
                            <p>157</p>
                            <Link to='' className=' bg-blue-400 hover:bg-blue-600 p-2 text-center text-white font-bold rounded-md '>Place-Order</Link>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default PlaceOrder;