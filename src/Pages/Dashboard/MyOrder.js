import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?buyer=${user.email}`, {
                method: "GET",
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data)
                });
        }
    }, [user, navigate])
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
                        orders.map(order =>
                            <tr>
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