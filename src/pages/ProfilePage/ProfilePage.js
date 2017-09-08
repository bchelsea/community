import React from 'react';
import {Link} from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = (props) => {
    return (
    <div>
        <div>
        <Link className='Settings-cancel btn btn-primary back-home' to='/'>back to home</Link>
      </div>
    </div>
    )

}


export default ProfilePage;

