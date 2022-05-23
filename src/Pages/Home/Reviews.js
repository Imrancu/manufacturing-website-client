import React from 'react';
import image from '../../Assets/images/avater.png';
import Review from './Review';

const Reviews = () => {

    const reviews = [
        {
            _id: 1,
            avater: image,
            comment: "When you suspect review fraud, investigating the reviewers is as important as looking at the comments they write.",
            ratings: 5
        },
        {
            _id: 2,
            avater: image,
            comment: "When you suspect review fraud, investigating the reviewers is as important as looking at the comments they write.",
            ratings: 4
        },
        {
            _id: 3,
            avater: image,
            comment: "When you suspect review fraud, investigating the reviewers is as important as looking at the comments they write.",
            ratings: 3
        },
        {
            _id: 4,
            avater: image,
            comment: "When you suspect review fraud, investigating the reviewers is as important as looking at the comments they write.",
            ratings: 5
        },
        {
            _id: 5,
            avater: image,
            comment: "When you suspect review fraud, investigating the reviewers is as important as looking at the comments they write.",
            ratings: 5
        },
        {
            _id: 6,
            avater: image,
            comment: "When you suspect review fraud, investigating the reviewers is as important as looking at the comments they write.",
            ratings: 5
        },
    ]

    return (
        <div className='px-20 py-20'>
            <h1 className='my-10 text-3xl text-center font-semibold uppercase'>What Our Client Says!</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 content-center gap-5 my-10'>

            {
                reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    />)
                }
            </div>
        </div>
    );
};

export default Reviews;