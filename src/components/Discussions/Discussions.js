import React from 'react';
import './Discussions.css';
import NewDiscussion from '../NewDiscussion/NewDiscussion.js';


const Discussions = (props) => {
    return (
        <div className='Discussions'>
            <h3> Discussions</h3>< br />
            <div className='NewDiscussion'>
            <NewDiscussion handleNewDiscussion={props.handleNewDiscussion} />
            { !props.discussions ? 
            <p>Loading</p> 
            : 
            props.discussions.map(d => 
            <div key={d._id} className='pre-scrollable'>
                <div className='one-discussion'>
                    <h4 className='discussion-title'>
                    {d.title}
                    </h4>
                    <h4>
                    {d.category}
                    </h4>
                    <h6>
                    {d.createdAt}
                    </h6>
                    <h5 className='discussion-content'>
                    {d.content}
                    </h5>
                </div>
            </div>) }
        </div>
    </div>
    )

}


export default Discussions;
