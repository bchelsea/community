import React from 'react';
import {Link} from 'react-router-dom';
import './ResourcesPage.css';
import EventsList from '../../components/EventsList/EventsList.js';

const ResourcesPage = (props, context) => {
    return (
        <div className='ResourcesPage'>
            <h3> Resources </h3>
            <ul className="pre-scrollable"> 
            <EventsList />
            </ul>
            <Link className='Settings-cancel btn btn-default btn-sm' to='/'>back to home</Link>
        </div>
    )
}


export default ResourcesPage;