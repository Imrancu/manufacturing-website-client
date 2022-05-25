import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const UserInfo = () => {
    const [user] = useAuthState(auth);
    const email = user.email
    const [userInfo, setUserInfo] = useState({})
    const {name, phone, address, url} = userInfo
    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}`)
            .then(res => res.json())
            .then(data => {
                setUserInfo(data)
            })
    }, [userInfo, email])

    return (
        <div>
            <div class="card-body">
                <h2 className="text-center text-2xl font-bold">Personal Info</h2>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Address: {address}</p>
                <p>LinkedIn: {url}</p>
            </div>
        </div>
    );
};

export default UserInfo;