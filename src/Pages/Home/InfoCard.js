import React from 'react';



const InfoCard = (props) => {
    const { title, image, qty } = props.info;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="pt-5 mb-[-20px]">
                <img src={image} alt="Shoes" className="rounded-xl w-32" />
            </figure>
            <div className="card-body items-center text-center">
                <h1 className='text-4xl font-bold rounded-full p-2'>{qty}+</h1>
                <h2 className="">{title}</h2>
            </div>
        </div>
    );
};

export default InfoCard;