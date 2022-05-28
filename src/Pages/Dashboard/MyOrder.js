import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {

    const navigate = useNavigate()
    const [orders, setOrders] = useState([])
    console.log(orders);
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`https://stormy-cove-38680.herokuapp.com/order/${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])
    return (
        <div className="overflow-x-auto mt-5">
            <h1>My orders: {orders.length}</h1>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) =>
                            <tr key={index}>
                                <td>{order.name}</td>
                                <td>{order.client}</td>
                                <td>${order.price} USD</td>
                                <td>
                                    {(order.price && !order.paid) && <Link to={`/dashboard/payment${order._id}`}><button className='btn btn-sm btn-success'>Pay</button></Link>}
                                    {(order.price && order.paid) && <span className='text-success'>Paid</span>}
                                </td>
                            </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;