import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import UserInfo from './UserInfo';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const { register,reset, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const email = user?.email;
        const { name, url, address, phone } = data
        const currentUser = { name, url, address, phone }
        if (email) {
            fetch(`https://stormy-cove-38680.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())               
        }
        reset()
    }
    return (
            <div className="grid lg:grid-cols-2 gap-x-7 bg-base-100">
                <div className="card-body border rounded-2xl">
                    <h2 className="text-center text-2xl font-bold">Update Profile</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-x-8">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder='Your Name'
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                                
                            />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                defaultdefaultvalue={user.email}
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="input input-bordered w-full max-w-xs"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'Phone is Required'
                                    }
                                })}
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Address"
                                className="input input-bordered w-full max-w-xs"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Address is Required'
                                    }
                                })}
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">LinkedIn Profile</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Profile URL"
                                className="input input-bordered w-full max-w-xs"
                                {...register("url", {
                                    required: {
                                        value: true,
                                        message: 'URL is Required'
                                    }
                                })}
                            />
                        </div>
                        <input className='btn w-full max-w-xs btn-primary text-white mt-9' type="submit" defaultdefaultvalue="Update" />
                    </form>
                </div>
                <div className='border rounded-2xl'>
                    <UserInfo />
                </div>
            </div>
    );
};

export default MyProfile;