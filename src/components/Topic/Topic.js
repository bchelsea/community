import React from 'react';
import './Topic.css';


const TopicBox = (props) => {
    let style = {
        display: 'flex',
        width: 100,
        height: 200,
    };
    return (
    <div>
            <h6> Community Topics</h6>
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
                    <li className='TopicItem'> Eat and Drink</li>
                    <li className='TopicItem'> High Schools</li>
                    <li className='TopicItem'> topic 1</li>
                    <li className='TopicItem'> topic 1</li>
                    <li className='TopicItem'> topic 1</li>
                    <li className='TopicItem'> topic 1</li>
                </ul>
            </div>
    </div>
    )
}

export default TopicBox;

