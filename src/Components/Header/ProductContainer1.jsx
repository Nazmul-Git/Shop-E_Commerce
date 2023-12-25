/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

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

            <div>
                {
                    products.map(p=>)
                }
            </div>
        </div>
    );
};

export default ProductContainer1;