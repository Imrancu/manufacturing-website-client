import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div className='px-20'>
            <h1 className='my-10 text-3xl text-center font-semibold uppercase'>Our Best Products</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 content-center gap-5 my-10'>
            {
                products.slice(0,6).map(product => <Product
                key={product._id}
                product={product}
                />)
            }
            </div>
        </div>
    );
};

export default Products;