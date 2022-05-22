import React, { useEffect, useState } from 'react';
import RefPart from './RefPart';

const RefParts = () => {
    const [parts, setParts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setParts(data));
    },[])
    return (
        <div className=' mt-10 px-20'>
            <h1 className='text-3xl text-center font-semibold uppercase'>Our Best Products</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 content-center gap-5'>
            {
                parts.slice(0,6).map(part => <RefPart
                key={part._id}
                part={part}
                />)
            }
            </div>
        </div>
    );
};

export default RefParts;