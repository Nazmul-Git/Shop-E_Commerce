/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Products from './Products';

const ProductContainer1 = () => {
    const [products, setProducts] = useState([]);

        useEffect(() => {
          // Use an absolute path or adjust the relative path based on your project structure
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
              // Do something with the fetched data, such as updating state
            })
            .catch((err) => {
              console.error(err);
              // Handle errors, e.g., display an error message to the user
            });
        }, []);

    return (
        <div>
            <div className='p-8 text-center'>
                <h2>Products</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, cum.</p>
            </div>

            <div className='md:flex flex-wrap gap-4 justify-center items-center p-4 m-2'>
                {
                    products.map(p=><Products key={p.id} products={p}></Products>)
                }
            </div>
        </div>
    );
};

export default ProductContainer1;