import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const [details, setDetails] = useState({});
    const [quantities, setQuantities] = useState(20)
    const { id } = useParams();
    const { price, name, image, description, quantity } = details;

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [details, id]);

    const handleDecrement = () => {
        if (quantities > 20) {
            setQuantities(prevCount => prevCount - 1);
        }
    }
    const handleIncrement = () => {
        if (quantities < quantity)
            setQuantities(prevCount => prevCount + 1);
    }

    return (
        <div className='mt-24 mb-14  flex justify-center items-center'>
            <div class="card w-2/3 card-side bg-base-100 shadow-xl">
                <figure className='w-1/2'><img src={image} alt="Movie" /></figure>
                <div class="card-body w-1/2">
                    <h2 class="card-title">{name}</h2>
                    <p><small>{description}</small></p>
                    <p>Price: ${price * quantities}</p>
                    <span class="label-text">InStock: {quantity - quantities}</span>

                    <div class="form-control">
                        <label class="label">
                        </label>
                        <label class="input-group">
                            <span onClick={handleDecrement} className='text-3xl font-bold'>-</span>
                            <div className='form-control px-8'>{quantities}</div>
                            <span onClick={handleIncrement} className='text-3xl font-bold'>+</span>
                        </label>
                    </div>


                    <label for="my-modal-6" class="btn btn-primary w-1/2">Add To Cart</label>

                    <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                    <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                            <div className='flex justify-between'>
                                <h3 class="font-bold text-xl">WOW! Order Your Product.</h3>
                                <label for="my-modal-6" class="btn">x</label>
                            </div>
                            <label className='label'>
                                <span class="label-text">Product Name</span>
                            </label>
                            <input type="text" value={name} class="input input-bordered w-full max-w-xs" />
                            <label className='label'>
                                <span class="label-text">Product Price</span>
                            </label>
                            <input type="text" value={price * quantities} class="input input-bordered w-full max-w-xs" />
                            <label className='label'>
                                <span class="label-text">Product Quantity</span>
                            </label>
                            <input type="text" value={quantities} class="input input-bordered w-full max-w-xs mb-4" />
                            <input type="text" placeholder="Phone Number" class="input input-bordered w-full max-w-xs mb-4" />
                            <input type="address" placeholder="Your Address" class="input input-bordered w-full max-w-xs mb-4" />
                            <br />
                            <button className='btn btn-primary'>Place An Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Purchase;