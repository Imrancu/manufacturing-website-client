import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {

    const navigate = useNavigate()
    const [orders, setOrders] = useState([])
    console.log(orders);
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order/${user.email}`)
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
                        <th>Qty</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) =>
                            <tr key={index}>
                                <td>{order.name}</td>
                                <td>{order.client}</td>
                                <td>{order.price}</td>
                                <td>{order.quantity}</td>
                            </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;