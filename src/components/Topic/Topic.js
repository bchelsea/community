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
            <h5> Community Topics</h5>
            <div
            className='TopicBox' 
            style={style}
            >
                <ul className="pre-scrollable"> 
                    <li className='TopicItem'><a href="">Garage Sales</a></li>
                    <li className='TopicItem'> Lost and Found</li>
                    <li className='TopicItem'> Neighborhood Watch</li>
                    <li className='TopicItem'> Crime</li>
                    <li className='TopicItem'> Moving to Whittier</li>
                    <li className='TopicItem'> Community Events</li>
                    <li className='TopicItem'> Good Eats</li>
                    <li className='TopicItem'> High Schools</li>
                    <li className='TopicItem'> Random</li>
                </ul>
            </div>
    </div>
    )
}

export default TopicBox;

