import React from 'react';

const Review = (props) => {
    const { avater, comment, ratings } = props.review;
    return (
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
                <div class="avatar">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={avater} alt="avater" />
                    </div>
                </div>
                <p>{comment}</p>
                <h2 class="card-title">Ratings: {ratings}</h2>
            </div>
        </div>
    );
};

export default Review;