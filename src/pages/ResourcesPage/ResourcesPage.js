import React from 'react';
import {Link} from 'react-router-dom';
import './ResourcesPage.css';
import EventsList from '../../components/EventsList/EventsList.js';



const ResourcesPage = (props, context) => {
    return (
        <div className='ResourcesPage'>
            <h3> Resources & Events </h3>
            <h3 className='events-label'>Upcoming Events in Whittier </h3>
            <div className="pre-scrollable resources-page"> 
            <EventsList />
            </div>
            <br /> 
            <br />
            <div>
            <Link className='Settings-cancel btn btn-default btn-sm' to='/'>back to home</Link>
            </div>
        </div>
    )
}


export default ResourcesPage;