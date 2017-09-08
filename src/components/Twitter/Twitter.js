import React from 'react';
import './Twitter.css';



const Twitter = (props) => {
    return (
        <div className='Twitter'>
        
            <a href="https://twitter.com/whittierpd" className="twitter-follow-button" data-show-count="false">Follow @whittierpd on Twitter!</a>
            <script async src="//platform.twitter.com/widgets.js" charSet="utf-8"></script>
   
        </div>
    )
}

export default Twitter;