import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = ({ children }) => {

    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    return (
        <div class="drawer drawer-end z-50">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                <div class="w-full navbar bg-base-300 px-20 z-40 fixed top-0">
                    <label for="my-drawer-2" class="drawer-button lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
                    <div class="flex-1 text-neutral px-2 mx-2 text-2xl font-bold ">Refrigerator Needs</div>
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal gap-x-3">
                            <li><NavLink to="/" className='rounded-lg'>Home</NavLink></li>
                            <li><NavLink to="/purchase" className='rounded-lg'>Purchase</NavLink></li>
                            {user && <li><NavLink to="/dashboard" className='rounded-lg'>Dashboard</NavLink></li>}
                            <li><NavLink to="/blogs" className='rounded-lg'>Blogs</NavLink></li>
                            <li>{user ? <button onClick={logout} class="btn rounded-lg btn-ghost">Sign Out</button> : <NavLink to="/login" className='rounded-lg'>Login</NavLink>}</li>
                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>

                </ul>

            </div>
        </div>
    );
};

export default Navbar;