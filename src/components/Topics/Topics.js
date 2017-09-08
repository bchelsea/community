import React from 'react';
import Topic from '../Topic/Topic.js';
import './Topics.css';


const Topics = (props) => {
    return (
        <div className='Topics'>
            <Topic handleFilterChange={props.handleFilterChange} />
        </div>
    )
}

export default Topics;

