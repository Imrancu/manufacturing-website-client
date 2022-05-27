import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const UserInfo = () => {

    const [user] = useAuthState(auth);
    const email = user.email
    const [userData, setUserData] = useState({})
    useEffect(() => {
        fetch(`https://stormy-cove-38680.herokuapp.com/user/${email}`)
            .then(res => res.json())
            .then(data => {
                setUserData(data);
            })
    }, [userData, email])

    return (
        <div>
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Personal Info</h2>
                <p>Name: {userData.name}</p>
                <p>Email: {userData.email}</p>
                <p>Phone: {userData.phone}</p>
                <p>Address: {userData.address}</p>
                <p>LinkedIn: {userData.url}</p>
            </div>
        </div>
    );
};

export default UserInfo;