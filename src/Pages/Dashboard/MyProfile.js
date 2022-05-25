import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)


    const handleSubmit = async data => {
        console.log(data);
    }
    return (
        <div className='flex h-screen justify-center items-center mt-32 py-40'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Update Profile</h2>
                    <form onSubmit={handleSubmit}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                value={user.displayName}
                                disabled
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                value={user.email}
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
                            />                            
                        </div>
                        <input className='btn w-full max-w-xs btn-primary text-white' type="submit" value="Update" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default MyProfile;