import React from 'react';
import {Link} from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = (props) => {
    return (
    <div>
        <div>
            <h1 className='profile-text'> Nothing to See here... yet!</h1>
        <Link className='Settings-cancel btn btn-primary back-home' to='/'>back to home</Link>
      </div>
    </div>
    )

}


export default ProfilePage;

