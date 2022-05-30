import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    
    const imgStorageKey='0b6c69eaea2fef2628578a94e282eed5'
    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                const img = result.data.url;
                const product = {
                    image: img,
                    name: data.name,
                    price: data.price,
                    description: data.description,
                    quantity: data.quantity
                }
                fetch('https://stormy-cove-38680.herokuapp.com/addProduct', {
                    method: "POST",
                    headers: {
                        'content-type': "application/json",
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res=> res.json())
                .then(insertedProduct => {
                    if(insertedProduct.insertedId){
                        toast.success('Product Successfully added')
                    }
                })
            }
        })
    }
    return (
        <div className=''>
            <h1 className='text-xl mb-5 text-center'>Add New Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="border p-10 grid grid-cols-2
             justify-center items-center flex-col">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name"
                        )}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price",)}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("quantity", )}
                    />
                    
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="Description"
                        className="input input-bordered w-full max-w-xs"
                        {...register("description", )}
                    />
                    
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Image</span>
                    </label>
                    <input
                        type="file"
                        placeholder="Image"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", )}
                    />
                    
                </div>
                <input className='btn w-full max-w-xs btn-primary text-white' type="submit" defaultdefaultvalue="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;