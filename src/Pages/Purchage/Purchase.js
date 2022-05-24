import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {id} =  useParams()
    return (
        <div className='mt-20'>
            <h1>This is Purchase page{id}</h1>
        </div>
    );
};

export default Purchase;