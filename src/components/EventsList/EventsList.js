import React from 'react';
import './EventsList.css';
import Event from '../Event/Event';


const  EventsList = (props) => {
    return (
        
        <div className='EventsList'>
        EVENT 1 <br /> <Event /> 
        -----
        <Event /> EVENT TWO
        -----
        <Event /> EVENT THREE 
        -----
        <Event /> EVENT FOUR
        -----
        <Event /> EVENT FIVE
        -----
        <Event /> EVENT SIX
        -----
        </div>





    )
}

export default EventsList;
