import React from 'react';
import './Event.css';

const Event = (props) => {
    let style = {
        width: 800,
        height: 300,
        border: '1px solid black',
        margin: 'auto'
    };

    return (
        <div style={style} >
            <div className='event-image'>
            </div>
        </div>

    );
}




export default Event;