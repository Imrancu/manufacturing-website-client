import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews]= useState([])

    useEffect(()=>{
        fetch('https://stormy-cove-38680.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <div className='px-20 py-20'>
            <h1 className='my-10 text-3xl text-center font-semibold uppercase'>What Our Client Says!</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 content-center gap-5 my-10'>

            {
                reviews.map((review, index) => <Review
                    key={index}
                    review={review}
                    />)
                }
            </div>
        </div>
    );
};

export default Reviews;