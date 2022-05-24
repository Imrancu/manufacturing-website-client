import React from 'react';

const RefPart = (props) => {
    const { name, price, description, image, quantity } = props.part;

    return (
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description.slice(0,100)} ...</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>QTY: {quantity}</small></p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Purchase Now</button>
                    </div>
                </div>
            </div>
    );
};

export default RefPart;