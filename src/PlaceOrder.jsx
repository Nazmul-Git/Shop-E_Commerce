/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { data } from 'autoprefixer';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PlaceOrder = ({ totalPrice, quantity, imgUrl, productName, handleCount, count, vats, priceWithCharge, navigateTo }) => {
    const [isUser, setUser] = useState(false);
    const [userDetails, setUserDetails] = useState([]);
    const [deliveryFee, setDelivery] = useState(null);
    // console.log(userDetails)



    // let delivery;
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const username = form.name.value;
        const number = form.number.value;
        const province = form.province.value;
        const city = form.city.value;
        const area = form.area.value;
        const address = form.address.value;
        const arrNew = [`username: ${username}`,    `number: ${number}`,    `province: ${province}`,    `city: ${city}`,    `area: ${area}`,    `address: ${address}`]

        // post to server
        // const user={username:username,number:number,province:province,city:city,address:address}
        // fetch('http://localhost:5173/products/:id', {
        //     method:'POST',
        //     headers:{
        //         'content-type':'application/json'
        //     },
        //     body:JSON.stringify(user)
        // }).then(res=>res.json()).then(data=>console.log(data))


        const lowerCase = province.toLowerCase();
        if (lowerCase === 'dhaka') {
            navigateTo(55)
            setDelivery(55)
            // delivery=55;

        }
        else {
            navigateTo(120)
            setDelivery(120)
            // delivery=120;
        }

        if (form) {
            setUser(true);
            setUserDetails(arrNew);
        }
        form.reset();
    };


    return (
        <div className=' md:grid grid-cols-2 lg:p-20 md:p-6 p-2 gap-4'>
            {!isUser ? <div className=''>
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
                                        <button type='submit' value='submit' className=" text-lg font-bold bg-orange-300 p-2 w-full rounded-md hover:bg-orange-500 md:mt-10 "> Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </ div>
            </div> :
                <div className='flex flex-col gap-5'>
                    <p className='text-lg font-bold text-center text-green-500 '>Order Details</p>
                    <div className=' grid grid-cols-2'>
                        <div className='grid grid-cols-1 shadow-sm shadow-green-300 rounded-md'>
                            
                            {
                                userDetails.map((d, i) => <p key={i} className='text-pretty ml-10 font-semibold'>{d}</p>)
                            }
                        </div>
                        <div className=' backdrop-blur-md'>
                            <img src={imgUrl} alt="" />
                            <p className=' text-center font-semibold'>{productName}</p>
                            <div>
                                <p className='md:text-lg text-green-500 font-extrabold text-center'>Quantity</p>
                                <div className='flex justify-center  gap-6 text-lg font-bold'>
                                    <button onClick={() => { handleCount('decrement', deliveryFee); }} className='text-red-600'>-</button>
                                    {
                                        count
                                    }
                                    <button onClick={() => { handleCount('increment', deliveryFee); }} className='text-blue-600'>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type='submit' value='submit' className=" text-lg font-bold bg-orange-300 p-2 w-full rounded-md hover:bg-orange-500">Edit Details</button>
                </div>
            }

            <div className={`${isUser ? 'opacity-100' : 'opacity-0'} shadow-inner
                shadow-green-600 rounded-md duration-700 p-2`}>
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
                            <p>{quantity} Items Total</p>
                            <p>Delivery Fee</p>
                            {deliveryFee &&
                                <div>
                                    <p>Vat</p>
                                    <p>Total Payment</p>
                                </div>
                            }
                        </div>
                        <div className=' flex flex-col gap-2 text-red-600 font-semibold'>
                            <p><span className='text-blue-500'>$ </span>{totalPrice}</p>
                            <p><span className='text-blue-500'>$ </span>{deliveryFee}</p>
                            {deliveryFee &&
                                <div>
                                    <p><span className='text-blue-500'>$ </span>{vats}</p>
                                    <p><span className='text-blue-500'>$ </span>{priceWithCharge}</p>
                                </div>
                            }
                            <Link to='' className=' bg-blue-400 hover:bg-blue-600 p-2 text-center text-white font-bold rounded-md '>Place-Order</Link>
                        </div>
                    </div>


                </div>
            </div>    
        </div>
    );
};

export default PlaceOrder;