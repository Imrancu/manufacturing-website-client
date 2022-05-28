import React from 'react';

const Review = (props) => {
    const { description, rating } = props.review;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt='avater' />
                    </div>
                </div>
                <p>{description}</p>
                <h2 className="card-title">Ratings: {rating}</h2>
            </div>
        </div>
    );
};

export default Review;