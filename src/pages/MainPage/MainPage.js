import React from 'react';
import {Link} from 'react-router-dom';
import Topics from '../../components/Topics/Topics.js';
import Map from '../../components/Map/Map';
import NavBar from '../../components/NavBar/NavBar';
import Discussions from '../../components/Discussions/Discussions'


const MainPage = (props) => {
    return (
    <div>
        <div className="MainPage">
        <NavBar 
        user={props.user}
        handleLogout={props.handleLogout}/>
        <Topics />

        <Discussions />
        
        
        </div>
        
        <Map />

        
</div>

    )

}


export default MainPage;

