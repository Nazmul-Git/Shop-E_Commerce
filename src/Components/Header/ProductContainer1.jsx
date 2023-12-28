/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Products from './Products';
import { useState } from 'react'
import { Navigate } from 'react-router-dom';




const ProductContainer1 = () => {
  const [products, setProducts] = useState([]);
  const [clicked, setClicked] = useState(false);


  useEffect(() => {
    const jsonFilePath = '/src/Product1.json';

    fetch(jsonFilePath)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);


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
                products.map(p => <Products key={p._id} products={p}></Products>)
              }
            </div>
          </div> :
          <Navigate to='/products'></Navigate>
      }


    </div>
  );
};

export default ProductContainer1;