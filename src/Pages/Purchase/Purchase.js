import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth)
    const [details, setDetails] = useState({});
    const {name, price , quantity, image, description } = details;
    const { id } = useParams();
    const updateQuantity = quantity >= 20
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [details, id]);


    const handleOrder = event => {
        event.preventDefault();
        const phone = event.target.phone.value;
        const orders = {
            client: user.email,
            name: name,
            price: price,
            quantity: updateQuantity,
            phone: phone,
        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(orders)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                toast(`The order ${name} is done`)
            }
            else{
                toast.error(`${name} Already ordered`)
            }
        })
    }

    return (
        <div className='flex justify-center items-center'>
            <div className="card w-2/3 card-side bg-base-100 shadow-xl">
                <figure className='w-1/2'><img src={image} alt="Movie" /></figure>
                <div className="card-body w-1/2">
                    <h2 className="card-title">{name}</h2>
                    <p><small>{description}</small></p>
                    <p>Price: ${price}</p>
                    <span className="label-text">Quantity: {quantity}</span>
                    <label for="my-modal-6" className="btn btn-primary w-1/2">Add To Cart</label>
                    <form  onSubmit={handleOrder}>
                        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                        <div className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <div className='flex justify-between'>
                                    <h3 className="font-bold text-xl">Wow! Now you can order.</h3>
                                    <label for="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                </div>
                                <input 
                                type="email" 
                                value={user.email}
                                placeholder="Your Address" 
                                className="input input-bordered w-full max-w-xs"
                                />
                                <label className='label'>
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input 
                                type="text" 
                                name='name' 
                                value={name} 
                                className="input input-bordered w-full max-w-xs" />
                                <label className='label'>
                                    <span className="label-text">Product Price</span>
                                </label>
                                <input 
                                type="text" 
                                name='price' 
                                value={price} 
                                className="input input-bordered w-full max-w-xs" />
                                <label className='label'>
                                    <span className="label-text">Product Quantity</span>
                                </label>
                                <input
                                type="text" 
                                name='quantity'
                                placeholder='minimum 20'
                                className="input input-bordered w-full max-w-xs mb-4"
                                />
                                <input 
                                type="text"
                                name='phone'
                                placeholder="Phone Number" 
                                className="input input-bordered w-full max-w-xs mb-4"
                                />
                                <br />
                                <input className='btn btn-primary' type="submit" defaultValue="Place An Order" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Purchase;