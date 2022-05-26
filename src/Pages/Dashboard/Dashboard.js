import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile px-20" >
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ,">
                <h1 className='text-center text-3xl font-bold my-6'>Welcome to Dashboard</h1>
                <Outlet />

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-72 bg-base-100 text-base-content">
                    {!admin &&
                        <>
                            <li><Link to="/dashboard" className='mt-2'>Add a Review</Link></li>
                            <li><Link to="/dashboard/myOrder" className='mt-2'>My Order</Link></li>
                        </>
                    }

                    <li><Link to="/dashboard/myProfile" className='mt-2'>My Profile</Link></li>
                    {admin && <>
                        <li><Link to="/dashboard/users" className='mt-2'>Make Admin</Link></li>
                        <li><Link to="/dashboard/manageOrders" className='mt-2'>Manage All Orders</Link></li>
                        <li><Link to="/dashboard/addProduct" className='mt-2'>Add a Product</Link></li>
                        <li><Link to="/dashboard/manageProduct" className='mt-2'>Manage Product</Link></li>
                    </>}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;