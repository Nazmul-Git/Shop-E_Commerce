/* eslint-disable no-unused-vars */
import Products from './Products';
import { useState } from 'react'
import { Link, Navigate, useLoaderData } from 'react-router-dom';




const ProductContainer1 = () => {
  const [clicked, setClicked] = useState(false);
  const data=useLoaderData();
  console.log(data);


  const handleProductRoute = (val) => {
    console.log('clicked')
    setClicked(val);
  };


  return (
    <div>

      {
        !clicked ?
          <div className='mt-20'>
            <div className='p-8 text-center mt-4'>
              <h2 className=' font-extrabold text-4xl'>Feature Products</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, cum.</p>
            </div>
            <div className=' md:grid md:grid-cols-3 md:p-10  gap-4 lg:p-10 lg:grid-cols-4'>
              {
                data.map(p => <Products key={p._id} products={p} handleProductRoute={handleProductRoute}></Products>)
              }
              <Link to='/products' className='flex text-left p-6 font-bold text-lg hover:text-blue-700'>See more ...</Link>
            </div>
          </div> :
          <Navigate to='/products/'></Navigate>
      }


    </div>
  );
};

export default ProductContainer1;