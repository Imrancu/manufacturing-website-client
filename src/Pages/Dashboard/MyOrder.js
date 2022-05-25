import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?client=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])

    // const [orders, setOrders] = useState([]);
    // const [user] = useAuthState(auth);

    // useEffect(() => {
    //     if (user) {
    //         fetch(`http://localhost:5000/orders?client=${user.email}`)
    //         .then(res=> res.json())
    //         .then(data => setOrders(data))
    // , {
    // method: 'GET',
    // headers: {
    //     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    // }
    //     })
    //         .then(res => {
    //             if (res.status === 401 || res.status === 403) {
    //                 signOut(auth);
    //                 localStorage.removeItem('accessToken');
    //                 Navigate('/');
    //             }
    //             return res.json()
    //         })
    //         .then(data => {
    //             setOrders(data);
    //         });
    //     }
    // }, [user])

    return (
            <div class="overflow-x-auto mt-5">
                <table class="table w-full">
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
                            orders.map(order=> 
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