import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar.jsx';

const ProfilePage = (props) => {
    return (
    <div>
        <NavBar /> 
        <div className="ProfilePage">
            this is the profile page
        </div>
        <div>
        <Link className='Settings-cancel btn btn-default btn-sm' to='/'>back to home</Link>
      </div>
    </div>
    )

}


export default ProfilePage;

