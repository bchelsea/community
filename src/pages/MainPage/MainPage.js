import React from 'react';
import {Link} from 'react-router-dom';
import Topics from '../../components/Topics/Topics.js';
import Map from '../../components/Map/Map';




const MainPage = (props) => {
    return (
    <div>
        <div className="MainPage">
            this is the Main Page
        <Topics />
        </div>
        <Map />
        <div>
        <Link className='btn btn-default btn-sm' to='/profile'>Profile</Link>
        <Link className='btn btn-default btn-sm' to='/resources'>Resources</Link>
        </div>
        <div
  className="fb-like"
  data-share="true"
  data-width="450"
  data-show-faces="true">
</div>
<a href="/login" class="btn btn-default"><span class="fa fa-sign-in"></span> Login</a>  
 <a href="/signup" class="btn btn-default"><span class="fa fa-user"></span> Signup</a>
<a href="/resources" class="btn btn-primary"><span class="fa fa-facebook"></span> Facebook</a>
        
    </div>

    )

}


export default MainPage;

