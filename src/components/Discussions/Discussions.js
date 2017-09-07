import React from 'react';
import './Discussions.css';
import NewDiscussion from '../NewDiscussion/NewDiscussion.js';



const Discussions = (props) => {
    return (
        <div className='Discussions'>
            <h3> Discussions</h3>
            <div className='NewDiscussion'>
            <NewDiscussion />
            </div>
        </div>
    )
}


export default Discussions;
