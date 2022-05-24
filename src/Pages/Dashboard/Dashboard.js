import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile mt-14 px-20">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                <h1 className='text-center text-3xl'>Welcome to Dashboard</h1>
                <Outlet/>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard/myProfile" className='mt-2'>My Profile</Link></li>
                    <li><Link to="/dashboard" className='mt-2'>Add a Review</Link></li>
                    <li><Link to="/dashboard/myOrder" className='mt-2'>My Order</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;