import React from 'react';
import {Link} from 'react-router-dom';
import Topics from '../../components/Topics/Topics.js';
import Map from '../../components/Map/Map';
import NavBar from '../../components/NavBar/NavBar'


const MainPage = (props) => {
    return (
    <div>
        <div className="MainPage">
            this is the Main Page
            <NavBar 
        user={props.user}
        handleLogout={props.handleLogout}/>
        <Topics />
        <Link className='btn btn-default btn-sm' to='/profile'>Profile</Link>
        <Link className='btn btn-default btn-sm' to='/resources'>Resources</Link>
        
        </div>
    
        <Map />
        
</div>

    )

}


export default MainPage;

