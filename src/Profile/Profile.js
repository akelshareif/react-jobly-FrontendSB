import React from 'react';
import { Redirect } from 'react-router-dom';

import ProfileForm from './ProfileForm';
import './Profile.css';

const Profile = ({ user, getUser }) => {
    // on initial load, get user data, and send to form

    if (user) {
        return (
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-5">
                        <h3>Profile</h3>
                        <ProfileForm user={user} getUser={getUser} />
                    </div>
                </div>
            </div>
        );
    } else {
        return <Redirect to="/" />;
    }
};

export default Profile;
