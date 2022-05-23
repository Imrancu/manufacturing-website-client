import React from 'react';



const InfoCard = (props) => {
    const { title, image, qty } = props.info;
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure class="pt-5 mb-[-20px]">
                <img src={image} alt="Shoes" class="rounded-xl w-32" />
            </figure>
            <div class="card-body items-center text-center">
                <h1 className='text-4xl font-bold rounded-full p-2'>{qty}+</h1>
                <h2 class="">{title}</h2>
            </div>
        </div>
    );
};

export default InfoCard;