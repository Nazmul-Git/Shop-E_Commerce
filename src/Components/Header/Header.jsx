/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import feature from '../../../images/feature.jpg'


const Header = ({handleClick}) => {

    return (
        <div className='md:flex flex-row items-center justify-center'>
            <img src={feature} alt="" className='w-full md:relative' />
            <div className=' shadow-lg shadow-black-500 md:p-10 md:ml-48 md:mr-48  sm:p-2 md:absolute backdrop-blur-sm'>
                <div className=' text-center md:text-white'>
                    <h3 className=' font-bold'>The natural candle</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque aperiam repudiandae, nesciunt minus fugiat vel excepturi expedita? Ea, animi!</p>
                </div>
                <div className='flex items-center justify-center'>
                    <button onClick={handleClick} className='bg-green-400 font-bold hover:bg-green-300 rounded-md  p-2 m-2'>Discover our collection</button>
                </div>
            </div>
        </div>
    );
};

export default Header;