/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Products from './Products';
import { useState } from 'react'
import { Link, Navigate, useLoaderData } from 'react-router-dom';




const ProductContainer1 = ({scrollRef}) => {
  const [clicked, setClicked] = useState(false);
  const data=useLoaderData();
  // console.log(data);


  const handleProductRoute = (val) => {
    // console.log('clicked')
    setClicked(val);
  };


  return (
    <div className=' relative' ref={scrollRef}>

      {
        !clicked ?
          <div className='mt-20'>
            <div className='p-8 text-center mt-4'>
              <h2 className=' font-extrabold text-4xl'>Feature Products</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, cum.</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 md:p-10  gap-4 lg:p-10  relative'>
              {
                data.map(p => <Products key={p._id} products={p} handleProductRoute={handleProductRoute}></Products>)
              }
              <Link to='/products' className='flex text-left font-bold text-md text-blue-300 hover:text-blue-700 absolute md:bottom-8 lg:bottom-4 md:right-10 lg:right-14 bottom-0 right-4'>See more ...</Link>
            </div>
          </div> :
          <Navigate to='/products/'></Navigate>
      }


    </div>
  );
};

export default ProductContainer1;