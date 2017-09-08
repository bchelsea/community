import React from 'react';
import './Topic.css';


const TopicBox = (props) => {
    let style = {
        display: 'flex',
        width: 150,
        height: 200,
    };
    return (
    <div>
            <h5 className='community-topic'>Community Topics</h5>
            <div
            className='TopicBox' 
            style={style}
            >
                <ul className="pre-scrollable topic-list"> 
                    <li className='TopicItem' onClick={() => props.handleFilterChange('')}>View All Discussions</li>
                    <li className='TopicItem' onClick={() => props.handleFilterChange('Garage Sales')}>Garage Sales</li>
                    <li className='TopicItem' onClick={() => props.handleFilterChange('Lost And Found')}> Lost and Found</li>
                    <li className='TopicItem' onClick={() => props.handleFilterChange('Neighborhood Watch')}> Neighborhood Watch</li>
                    <li className='TopicItem' onClick={() => props.handleFilterChange('Crime')}> Crime</li>
                    <li className='TopicItem' onClick={() => props.handleFilterChange('Moving to Whittier')}> Moving to Whittier</li>
                    <li className='TopicItem' onClick={() => props.handleFilterChange('Community Events')}> Community Events</li>
                    <li className='TopicItem' onClick={() => props.handleFilterChange('Good Eats')}> Good Eats</li>
                    <li className='TopicItem' onClick={() => props.handleFilterChange('High School')}> High Schools</li>
                    <li className='TopicItem' onClick={() => props.handleFilterChange('Random')}> Random</li>
                </ul>
            </div>
    </div>
    )
}

export default TopicBox;

