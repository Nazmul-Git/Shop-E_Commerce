/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const PlaceOrder = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const number=form.number.value;
        const province=form.province.value;
        const city=form.city.value;
        const area=form.area.value;
        const address=form.address.value;
        // console.log(name,number, province,city,area,address)
    }

    return (
        <div className=' grid grid-cols-2 p-20'>
            <div>
                <div className=' text-black'>
                    <div className="">
                        <div className="hero-content flex-col backdrop-blur-sm">
                            <div className="text-center ">
                                <h1 className="text-xl font-bold text-black font-serif">User Info</h1>
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
                                    
                                    
                                    <div className="mt-6">
                                        <button  type='submit' value='submit' className=" text-lg font-bold bg-orange-400 p-2 w-full rounded-md"> Save</button>
                                    </div>

                                </form>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </ div>
            </div>
            <div>
                <p>total</p>
            </div>
        </div>
    );
};

export default PlaceOrder;