/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import leaf from '../../../images/leaf.svg'
import CheckOut from './CheckOut';
import PlaceOrder from '../../PlaceOrder';

const Cart = () => {
    const navigate=useNavigate();
    const product = useLoaderData();
    const { _id, imgUrl, price, name, details, mostSell } = product;
    const [count, setCount] = useState(1);
    const [newPrice, setNewPrice] = useState(price.toFixed(2));
    const [isModalOpen, setModalOpen] = useState(false);
    const [newState, setNewState]=useState(false)

    // console.log(isModalOpen)
    // console.log(count, newPrice)
    const handleCount = (action) => {

        if (action === 'increment' && count < 10) {
            const newCount = count + 1;
            const newP = price * newCount.toFixed(2);
            handlePriceUpdate(newCount, newP);

        } else if (action === 'decrement' && count > 1) {
            const newCount = count - 1
            const newP = price * newCount
            handlePriceUpdate(newCount, newP)
        }
    };

    const handlePriceUpdate = (newCount, newP) => {
        setCount(newCount);
        setNewPrice(newP.toFixed(2))
    };
    const navigateTo=()=>{
        // navigate('/place-order');
        // return newPrice; 
        // price ta k placeOrder a pathate hobe
        setNewState(true)
    }


    return (
        !newState?
        <div className=' relative'>
            <div className=' md:grid grid-cols-2 p-8 md:gap-10'>
                <div className=' bg-gray-100 p-4'>
                    <img src={imgUrl} alt="" className='' />
                    <p className='lg:text-lg'>All hand-made with natural soy wax, Candleaf is made for your pleasure moments.
                        🚚 FREE SHIPPING</p>
                </div>
                <div className='flex-row  p-4'>
                    <p className='md:text-2xl text-green-500 font-extrabold'>{name}</p>
                    <div className='flex md:justify-between lg:gap-40 md:gap-8 gap-4 '>
                        <div>
                            <p className='text-xl'>$ {newPrice}</p>

                            <div className=' flex-row items-center mt-10 gap-4'>
                                <p className='md:text-2xl text-green-500 font-extrabold'>Quantity</p>
                                <div className='flex gap-4 text-lg font-bold'>
                                    <button onClick={() => { handleCount('decrement'); }} className='text-red-600'>-</button>
                                    {
                                        count
                                    }
                                    <button onClick={() => { handleCount('increment'); }} className='text-blue-600'>+</button>
                                </div>
                            </div>
                        </div>


                        <div className=' grid grid-cols-1 lg:gap-20 md:gap-4 '>
                            <img src={leaf} alt="" className=' bg-green-500 rounded-full p-4 md:h-40 md:w-40' />
                            <p className='lg:text-lg text-justify '>{details}</p>
                            <div className=' grid grid-cols-2 gap-2'>
                                <button onClick={navigateTo}  className=' bg-blue-300 hover:bg-blue-400 lg:text-lg md:text-md text-sm font-bold rounded-md text-center p-2'>Buy Now</button>
                                <button onClick={() => setModalOpen(true)} className=' bg-green-300 hover:bg-green-400 lg:text-lg md:text-md text-sm font-bold rounded-md text-center p-2'>Add Cart</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <p className='p-10 lg:text-lg text-justify '>Wax: Top grade Soy wax that delivers a smoke less,  consistent burn ||
                    Fragrance: Premium quality ingredients with natural essential oils ||
                    Burning Time: 70-75 hours ||
                    Dimension: 10cm x 5cm ||
                    Weight: 400g </p>
            </div>
            {
                isModalOpen && <div className=' absolute top-2 right-20 left-20'><CheckOut isModalOpen={isModalOpen} onClose={() => setModalOpen(false)}></CheckOut></div>

            }

        </div> : <PlaceOrder key={_id} totalPrice={newPrice} quantity={count}></PlaceOrder>

    );
};

export default Cart;