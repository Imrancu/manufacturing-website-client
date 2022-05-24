import React from 'react';
import { useNavigate } from 'react-router-dom';

const RefPart = (props) => {
    const {_id, name, price, description, image, quantity } = props.part;
    const navigate = useNavigate();

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
                        <button 
                        onClick={()=> navigate(`/purchase/${_id}`)}
                        className="btn btn-primary">Purchase Now</button>
                    </div>
                </div>
            </div>
    );
};

export default RefPart;