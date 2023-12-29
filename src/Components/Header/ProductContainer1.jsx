/* eslint-disable no-unused-vars */
import Products from './Products';
import { useState } from 'react'
import { Navigate, useLoaderData } from 'react-router-dom';




const ProductContainer1 = () => {
  const [clicked, setClicked] = useState(false);
  const data=useLoaderData();
  // console.log(data);


  const handleProductRoute = () => {
    console.log('clicked')
    setClicked(true);
  };


  return (
    <div>

      {
        !clicked ?
          <div className='mt-20'>
            <div className='p-8 text-center mt-4'>
              <h2 className=' font-extrabold text-4xl'>Products</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, cum.</p>
            </div>
            <div onClick={handleProductRoute} className=' md:grid md:grid-cols-3 md:p-10  gap-4 lg:p-10 lg:grid-cols-4'>
              {
                data.map(p => <Products key={p._id} products={p}></Products>)
              }
            </div>
          </div> :
          <Navigate to='/products'></Navigate>
      }


    </div>
  );
};

export default ProductContainer1;