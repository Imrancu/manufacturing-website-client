import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)


    return (
        <div>
            <h1>{user.email}</h1>
            <p>{user.displayName}</p>
        </div>
    );
};

export default MyProfile;