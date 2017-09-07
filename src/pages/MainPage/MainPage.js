import React from 'react';
import Topics from '../../components/Topics/Topics.js';
import Map from '../../components/Map/Map';
import Twitter from '../../components/Twitter/Twitter';

import Discussions from '../../components/Discussions/Discussions'


const MainPage = (props) => {
    return (
    <div>
        <div className="MainPage">
        <Topics />
    
        <Discussions />
        
        </div>
        <Twitter />

        <Map />
        
</div>

    )

}


export default MainPage;


