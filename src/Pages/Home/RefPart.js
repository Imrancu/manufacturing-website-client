import React from 'react';

const RefPart = (props) => {
    const { name, price, description, image, quantity } = props.part;

    return (
            <div class="card bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={image} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>{description.slice(0,100)} ...</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>QTY: {quantity}</small></p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
    );
};

export default RefPart;