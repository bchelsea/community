import React from 'react';
import {Link} from 'react-router-dom';
import Topics from '../../components/Topics/Topics.js';
import Map from '../../components/Map/Map';


const MainPage = (props) => {
    return (
    <div>
        <div className="MainPage">
            this is the Main Page
        <Topics />
        <Link className='btn btn-default btn-sm' to='/profile'>Profile</Link>
        <Link className='btn btn-default btn-sm' to='/resources'>Resources</Link>
        
        </div>
    
        <Map />
        
</div>

    )

}


export default MainPage;

