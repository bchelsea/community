import React from 'react';
import './Discussions.css';
import NewDiscussion from '../NewDiscussion/NewDiscussion.js';



const Discussions = (props) => {
    return (
        <div>
            <h3 className='discussion-header1'> Discussions</h3>
            <br />
            <br />

            <div className='Discussions pre-scrollable'>
                { !props.discussions ? 
                <p>Loading</p> 
                : 
                <div className='discussions-list'>
                {props.discussions.map(d => 
                <div key={d._id} >
                    <div className='one-discussion' >
                        <h4 className='discussion-title'>
                        {d.title}
                        </h4>
                        
                        <h4 className='topic-header'></h4>
                        <h4 id='topic-header'>Topic: {d.category}</h4>
                        
                        <h5 className='discussion-content'>
                        {d.content}
                        </h5>
                        <h6>
                        Posted By: {d.user} On {d.createdAt}
                        </h6>
                    </div>
                </div>)}
                </div>
                }
        </div>
        { props.user &&
        <div className='NewDiscussion'>
            <div>
                <NewDiscussion 
                user={props.user}
                handleNewDiscussion={props.handleNewDiscussion} />
            </div>
        </div>
        }

    </div>
    )

}


export default Discussions;

