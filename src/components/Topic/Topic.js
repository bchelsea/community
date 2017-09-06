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
                    <li className='TopicItem'> topic 1</li>
                    <li className='TopicItem'> topic 1</li>
                    <li className='TopicItem'> topic 1</li>
                    <li className='TopicItem'> topic 1</li>
                    <li className='TopicItem'> topic 1</li>
                    <li className='TopicItem'> topic 1</li>
                    <li className='TopicItem'> topic 1</li>
                    <li className='TopicItem'> topic 1</li>
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

