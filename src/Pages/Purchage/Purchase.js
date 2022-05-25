import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const [details, setDetails] = useState({});
    const [quantities, setQuantities] = useState(20)
    const { id } = useParams();
    // const { price, name, image, description, quantity } = details;
    const { handleSubmit } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [details, id]);

    // const handleDecrement = () => {
    //     if (quantities > 20) {
    //         setQuantities(prevCount => prevCount - 1);
    //     }
    // }
    // const handleIncrement = () => {
    //     if (quantities < quantity)
    //         setQuantities(prevCount => prevCount + 1);
    // }

    const handleDecrement = () => {
        const xQuantity = details.quantity;
        const orderQuantity = xQuantity - 1
        const updateInfo = { orderQuantity }
        const url = `http://localhost:5000/order/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                setDetails(data)
            })
    }
    const handleIncrement = () => {
        const xQuantity = details.quantity;
        const orderQuantity = xQuantity + 1
        const updateInfo = { orderQuantity }
        const url = `http://localhost:5000/order/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                setDetails(data)
            })
    }


    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className='flex justify-center items-center'>
            <div class="card w-2/3 card-side bg-base-100 shadow-xl">
                <figure className='w-1/2'><img src={details.image} alt="Movie" /></figure>
                <div class="card-body w-1/2">
                    <h2 class="card-title">{details.name}</h2>
                    <p><small>{details.description}</small></p>
                    <p>Price: ${details.price + details.quantity}</p>
                    <span class="label-text">InStock: {details.quantity}</span>

                    <div class="form-control">
                        <label class="label">
                        </label>
                        <label class="input-group">
                            <span onClick={handleDecrement} className='text-3xl font-bold'>-</span>
                            <div className='form-control px-8'>{details.quantity}</div>
                            <span onClick={handleIncrement} className='text-3xl font-bold'>+</span>
                        </label>
                    </div>


                    <label for="my-modal-6" class="btn btn-primary w-1/2">Add To Cart</label>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                <input type="text" value={details.name} class="input input-bordered w-full max-w-xs" />
                                <label className='label'>
                                    <span class="label-text">Product Price</span>
                                </label>
                                <input type="text" value={details.price} class="input input-bordered w-full max-w-xs" />
                                <label className='label'>
                                    <span class="label-text">Product Quantity</span>
                                </label>
                                <input type="text" value={details.quantity} class="input input-bordered w-full max-w-xs mb-4" />
                                <input type="text" placeholder="Phone Number" class="input input-bordered w-full max-w-xs mb-4" />
                                <input type="address" placeholder="Your Address" class="input input-bordered w-full max-w-xs mb-4" />
                                <br />
                                <input className='btn btn-primary' type="submit" value="Place An Order" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Purchase;