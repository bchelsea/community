import React from 'react';
import {Link} from 'react-router-dom';
import './ResourcesPage.css';
import EventsList from '../../components/EventsList/EventsList.js';



const ResourcesPage = (props, context) => {
    return (
        <div className='ResourcesPage'>
            <h5 className='events-label'>Upcoming Events in Whittier </h5>
            <div className="pre-scrollable resources-page"> 
            <EventsList />
            </div>
            <br /> 
            <br />
            <div>
            <Link className='Settings-cancel btn btn-default back-home' to='/'>Back to Home</Link>
            </div>
        </div>
    )
}


export default ResourcesPage;