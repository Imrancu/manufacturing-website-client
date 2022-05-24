import React from 'react';

const Review = (props) => {
    const { avater, comment, ratings } = props.review;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={avater} alt="avater" />
                    </div>
                </div>
                <p>{comment}</p>
                <h2 className="card-title">Ratings: {ratings}</h2>
            </div>
        </div>
    );
};

export default Review;