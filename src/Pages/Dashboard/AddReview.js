import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {

    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async data => {

        const reviewData = {
            ...data,
            email: user.email
        }
        fetch('https://stormy-cove-38680.herokuapp.com/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        toast('Your Review is added');
        reset()
    };

    return (
        <div className='flex justify-center items-center'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-2xl text-center my-6'>Give A Review Here!</h1>
                <div class="card w-96 outline text-dark-content">
                    <div class="card-body">
                        <textarea
                            class="textarea input-bordered"
                            {...register("description", { required: true })}
                            placeholder="Write your comment">
                        </textarea>
                        <input type="number"
                            name='rating'
                            placeholder="Type your rating up to 5"
                            {...register("rating",
                                { min: 0, max: 5, required: true })}
                            class="input input-bordered w-full max-w-xs" />

                        <div class="card-actions justify-center">
                            {
                                <button class="btn btn-outline">Add Review</button>
                            }
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddReview;