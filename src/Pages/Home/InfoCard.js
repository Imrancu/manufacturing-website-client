import React from 'react';


const InfoCard = (props) => {
    const { title, image, qty } = props.info;
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure class="pt-5">
                <img className='w-28' src={image} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title mt-[-24px]">{title}</h2>
                <h1 className='text-4xl text-white font-bold bg-primary rounded-full p-2'>{qty}</h1>
            </div>
        </div>
    );
};

export default InfoCard;